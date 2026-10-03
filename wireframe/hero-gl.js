// The hero photo, redrawn by a small WebGL shader: it develops from grey to
// colour, a candle glow drifts over it (and follows the pointer on a
// desktop), film grain moves through it, and it pushes in and darkens as the
// page scrolls away. The <img> underneath stays the real photo: the page is
// complete without this file, and anything that goes wrong puts it back.
(function () {
  var hero = document.querySelector(".hero");
  var img = hero && hero.querySelector(".hero-photo");
  if (!img || !window.WebGLRenderingContext) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (navigator.connection && navigator.connection.saveData) return;

  var VERT =
    "attribute vec2 aPos;" +
    "varying vec2 vPos;" +
    "void main(){ vPos = aPos * 0.5 + 0.5; vPos.y = 1.0 - vPos.y; gl_Position = vec4(aPos, 0.0, 1.0); }";

  var FRAG =
    "precision mediump float;" +
    "uniform sampler2D uTex;" +
    "uniform vec2 uRes;" +      // canvas size, device px
    "uniform vec4 uMap;" +      // where the photo sits, as object-fit: cover would put it (x, y, w, h in device px)
    "uniform vec2 uFocus;" +    // object-position, 0..1: the push-in centres here
    "uniform vec2 uLight;" +    // candle position, 0..1 of the canvas
    "uniform float uTime;" +
    "uniform float uDevelop;" + // 0 = grey and dim, 1 = full colour
    "uniform float uScroll;" +  // 0 at the top, 1 once the hero has scrolled away
    "uniform float uGrain;" +   // grain cell size in device px
    "varying vec2 vPos;" +
    "float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }" +
    "float wobble(float t){ float i = floor(t); float f = fract(t); return mix(hash(vec2(i, 1.7)), hash(vec2(i + 1.0, 1.7)), f * f * (3.0 - 2.0 * f)); }" +
    "void main(){" +
    "  vec2 px = vPos * uRes;" +
    "  vec2 focus = uMap.xy + uMap.zw * uFocus;" +
    "  px = focus + (px - focus) / (1.0 + uScroll * 0.08);" +
    "  vec2 uv = clamp((px - uMap.xy) / uMap.zw, 0.0, 1.0);" +
    "  vec3 col = texture2D(uTex, uv).rgb;" +
    // Develop, matching the old CSS filter: grayscale(1) brightness(0.7) to none.
    "  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));" +
    "  col = mix(vec3(lum), col, uDevelop) * (0.7 + 0.3 * uDevelop);" +
    // Candle: a broad warm pool that breathes, and dims everything outside it a touch.
    "  float flick = 0.82 + 0.18 * (0.6 * wobble(uTime * 2.3) + 0.4 * wobble(uTime * 6.1 + 4.0));" +
    "  vec2 d = vPos - uLight; d.x *= uRes.x / uRes.y;" +
    "  float glow = exp(-dot(d, d) * 2.6) * flick * uDevelop;" +
    "  col *= mix(vec3(0.9), vec3(1.16, 1.02, 0.86), glow);" +
    // Film grain, a new frame of it 24 times a second, stronger in the shadows.
    "  float n = hash(floor(vPos * uRes / uGrain) + floor(uTime * 24.0)) - 0.5;" +
    "  col += n * 0.07 * (1.0 - lum * 0.6);" +
    "  col *= 1.0 - uScroll * 0.5;" +
    "  gl_FragColor = vec4(col, 1.0);" +
    "}";

  var canvas = document.createElement("canvas");
  canvas.className = "hero-gl";
  canvas.setAttribute("aria-hidden", "true");
  var gl = canvas.getContext("webgl", { alpha: false, antialias: false, depth: false, stencil: false, premultipliedAlpha: false, powerPreference: "low-power" });
  if (!gl) return;
  // Without a real graphics chip the shader would run on the CPU, frame after
  // frame; the plain photo is the better page there.
  var info = gl.getExtension("WEBGL_debug_renderer_info");
  var renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
  if (/swiftshader|llvmpipe|softpipe|software|basic render/i.test(renderer)) return;

  function shader(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  }
  var vs = shader(gl.VERTEX_SHADER, VERT);
  var fs = shader(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return;
  var prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  var aPos = gl.getAttribLocation(prog, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  var u = {};
  ["uRes", "uMap", "uFocus", "uLight", "uTime", "uDevelop", "uScroll", "uGrain"].forEach(function (name) {
    u[name] = gl.getUniformLocation(prog, name);
  });

  var tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  var dpr = 1;
  var focus = [0.5, 0.5];
  var light = { x: 0.62, y: 0.5, tx: 0.62, ty: 0.5, pointer: false };
  var visible = true;
  var running = false;
  var stopped = false;
  var raf = 0;
  var last = 0;
  var start = performance.now();
  var slow = 0;
  var frames = 0;

  function developed() {
    // The CSS bloom keeps running on the (hidden) <img>; its eased progress drives the shader.
    var anims = img.getAnimations ? img.getAnimations() : [];
    for (var i = 0; i < anims.length; i++) {
      if (anims[i].animationName === "bloom") {
        var p = anims[i].effect.getComputedTiming().progress;
        return p == null ? 1 : p;
      }
    }
    return 1;
  }

  function size() {
    var w = img.clientWidth;
    var h = img.clientHeight;
    if (!w || !h) return;
    // Sharp enough, without paying for every pixel on a 3x phone.
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    if (w * h * dpr * dpr > 2400000) dpr = Math.sqrt(2400000 / (w * h));
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    var pos = getComputedStyle(img).objectPosition.split(" ");
    focus = [parseFloat(pos[0]) / 100 || 0.5, parseFloat(pos[1]) / 100 || 0.5];
    var s = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    var dw = img.naturalWidth * s;
    var dh = img.naturalHeight * s;
    gl.uniform2f(u.uRes, canvas.width, canvas.height);
    gl.uniform4f(u.uMap, (canvas.width - dw) * focus[0], (canvas.height - dh) * focus[1], dw, dh);
    gl.uniform2f(u.uFocus, focus[0], focus[1]);
    gl.uniform1f(u.uGrain, Math.max(1, dpr * 1.25));
    draw(performance.now());
  }

  function draw(now) {
    var t = (now - start) / 1000;
    if (!light.pointer) {
      // On its own, the candle drifts slowly around the middle of the photo.
      light.tx = 0.6 + Math.sin(t * 0.21) * 0.12;
      light.ty = 0.5 + Math.sin(t * 0.17 + 1.3) * 0.1;
    }
    light.x += (light.tx - light.x) * 0.06;
    light.y += (light.ty - light.y) * 0.06;
    var scroll = Math.min(1, Math.max(0, window.scrollY / Math.max(1, hero.offsetHeight)));
    gl.uniform1f(u.uTime, t);
    gl.uniform1f(u.uDevelop, developed());
    gl.uniform1f(u.uScroll, scroll);
    gl.uniform2f(u.uLight, light.x, light.y);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function loop(now) {
    raf = 0;
    if (!running) return;
    raf = requestAnimationFrame(loop);
    // 30 frames a second is plenty for a flicker, and half the battery.
    if (now - last < 31) return;
    var gap = now - last;
    last = now;
    draw(now);
    // A device that can't keep up keeps the developed photo, still.
    if (frames++ > 10 && gap > 60) slow++;
    if (slow > 12) stop();
  }

  function play() {
    if (stopped || running || !visible || document.hidden) return;
    running = true;
    last = 0;
    raf = requestAnimationFrame(loop);
  }

  function pause() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  function stop() {
    pause();
    stopped = true;
    // Settle on a finished, still frame of the photo.
    light.tx = light.x;
    light.ty = light.y;
    draw(start + 1e7);
  }

  function teardown() {
    pause();
    stopped = true;
    canvas.remove();
    hero.classList.remove("has-gl");
  }

  function begin(source) {
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, source);
    } catch (e) {
      return;
    }
    if (source.close) source.close();
    if (gl.getError() !== gl.NO_ERROR) return;
    img.insertAdjacentElement("afterend", canvas);
    size();
    hero.classList.add("has-gl");

    new ResizeObserver(size).observe(img);
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) play(); else pause();
    }).observe(hero);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) pause(); else play();
    });
    canvas.addEventListener("webglcontextlost", teardown);

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      hero.addEventListener("pointermove", function (event) {
        var r = canvas.getBoundingClientRect();
        light.pointer = true;
        light.tx = Math.min(1.1, Math.max(-0.1, (event.clientX - r.left) / r.width));
        light.ty = Math.min(1.1, Math.max(-0.1, (event.clientY - r.top) / r.height));
      });
      hero.addEventListener("pointerleave", function () { light.pointer = false; });
    }
    play();
  }

  // The photo is shrunk to what the canvas can show, off the main thread where
  // the browser can, so the upload to the GPU is quick.
  function texture() {
    var cover = Math.max(img.clientWidth / img.naturalWidth, img.clientHeight / img.naturalHeight);
    var scale = Math.min(window.devicePixelRatio || 1, 1.5) * cover * 1.1;
    if (!window.createImageBitmap || scale >= 1) return Promise.resolve(img);
    return createImageBitmap(img, {
      resizeWidth: Math.round(img.naturalWidth * scale),
      resizeHeight: Math.round(img.naturalHeight * scale),
      resizeQuality: "high"
    }).catch(function () { return img; });
  }

  function whenReady() {
    if (img.classList.contains("is-broken")) return;
    (img.decode ? img.decode() : Promise.resolve()).then(function () {
      // Set up once the page has settled, so it never holds up a first tap.
      var idle = window.requestIdleCallback || function (fn) { setTimeout(fn, 200); };
      idle(function () { texture().then(begin); }, { timeout: 1200 });
    }, function () {});
  }

  if (img.complete && img.naturalWidth) whenReady();
  else img.addEventListener("load", whenReady, { once: true });
})();

// The wardrobe: each unlocked gallery cover is a doorway into Dani's work.
// Stepping inside rushes forward through the door into hanging lace, which
// parts onto a board of her photographs pinned up and overlapping. Tap a
// photo to see it whole. Back button, Escape, or "Step back out" leaves.
(function () {
  var data = window.GALLERY;
  if (!data) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canAnimate = typeof Element.prototype.animate === "function";
  var animate = !reduce && canAnimate;
  var titles = {};
  data.categories.forEach(function (c) { titles[c.id] = c.title; });

  var state = { cat: "all", list: [], origin: null, openedFromHash: false, lightboxIndex: -1 };
  var overlay, board, inner, emptyNote, titleEl, countEl, chipsEl, closeBtn, lightbox;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function photosFor(cat) {
    if (cat !== "all") return data.photos.filter(function (p) { return p.category === cat; });
    // The full board deals the galleries out in turn, so every look is mixed in.
    var piles = data.categories.map(function (c) { return photosFor(c.id); });
    var mixed = [];
    for (var round = 0; mixed.length < data.photos.length; round++) {
      piles.forEach(function (pile) { if (pile[round]) mixed.push(pile[round]); });
    }
    return mixed;
  }

  // Stable pseudo-random numbers per photo, so the board looks the same every visit.
  function seeded(i, salt) {
    var n = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453;
    return n - Math.floor(n);
  }

  // ---------- Entry points ----------
  document.querySelectorAll(".work-card[data-gallery]").forEach(function (card) {
    var cat = card.getAttribute("data-gallery");
    var frame = card.querySelector(".work-frame");
    var step = el("button", "step-inside", "Step inside");
    step.type = "button";
    step.setAttribute("aria-label", "Step inside the " + (titles[cat] || "") + " gallery");
    step.addEventListener("click", function () { open(cat, frame, step); });
    frame.appendChild(step);
  });

  var walk = document.getElementById("enter-wardrobe");
  var walkNote = document.getElementById("wardrobe-count");
  if (walkNote) walkNote.textContent = "All " + data.photos.length + " photographs, pinned up together";
  if (walk) walk.addEventListener("click", function () { open("all", walk, walk); });

  // ---------- The room inside ----------
  function build() {
    if (overlay) return;
    overlay = el("div", "wardrobe");
    overlay.hidden = true;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "wardrobe-title");

    var bar = el("div", "wardrobe-bar");
    var heading = el("div", "wardrobe-heading");
    titleEl = el("h2", "wardrobe-title");
    titleEl.id = "wardrobe-title";
    countEl = el("p", "wardrobe-count");
    heading.appendChild(titleEl);
    heading.appendChild(countEl);
    chipsEl = el("div", "wardrobe-chips");
    chipsEl.setAttribute("role", "group");
    chipsEl.setAttribute("aria-label", "Galleries");
    [{ id: "all", title: "All" }].concat(data.categories).forEach(function (c) {
      var chip = el("button", "chip", c.title);
      chip.type = "button";
      chip.setAttribute("data-cat", c.id);
      chip.addEventListener("click", function () { show(c.id, true); });
      chipsEl.appendChild(chip);
    });
    closeBtn = el("button", "wardrobe-close", "Step back out");
    closeBtn.type = "button";
    closeBtn.addEventListener("click", requestClose);
    bar.appendChild(heading);
    bar.appendChild(chipsEl);
    bar.appendChild(closeBtn);

    board = el("div", "wardrobe-board");
    inner = el("div", "board-inner");
    emptyNote = el("div", "board-empty");
    emptyNote.hidden = true;
    board.appendChild(inner);
    board.appendChild(emptyNote);
    overlay.appendChild(bar);
    overlay.appendChild(board);
    document.body.appendChild(overlay);

    inner.addEventListener("click", function (event) {
      var pin = event.target.closest(".pin");
      if (pin) openLightbox(Number(pin.getAttribute("data-index")), pin);
    });
    overlay.addEventListener("keydown", function (event) { trapFocus(event, overlay); });

    buildLightbox();
    var resizeTimer;
    window.addEventListener("resize", function () {
      if (overlay.hidden) return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { layout(false); }, 120);
    });
  }

  function show(cat, fromChip) {
    state.cat = titles[cat] || cat === "all" ? cat : "all";
    state.list = photosFor(state.cat);
    titleEl.textContent = state.cat === "all" ? "The Wardrobe" : titles[state.cat];
    countEl.textContent = state.list.length + (state.list.length === 1 ? " photograph" : " photographs");
    chipsEl.querySelectorAll(".chip").forEach(function (chip) {
      chip.setAttribute("aria-pressed", String(chip.getAttribute("data-cat") === state.cat));
    });
    layout(fromChip && animate);
    board.scrollTop = 0;
    if (fromChip && history.state && history.state.wardrobe) {
      history.replaceState({ wardrobe: state.cat }, "", "#wardrobe-" + state.cat);
    }
  }

  // Pinned-up board: photos in loose columns that overlap, each slightly turned.
  function layout(fade) {
    var list = state.list;
    inner.textContent = "";
    emptyNote.hidden = list.length > 0;
    if (!list.length) {
      emptyNote.textContent = "";
      emptyNote.appendChild(el("p", "", "Nothing pinned here yet."));
      var all = el("button", "btn btn-ghost", "See all photographs");
      all.type = "button";
      all.addEventListener("click", function () { show("all", true); });
      emptyNote.appendChild(all);
      inner.style.height = "0px";
      return;
    }
    var width = inner.clientWidth;
    var maxCols = width >= 1100 ? 5 : width >= 760 ? 4 : width >= 460 ? 3 : 2;
    // Few photos get fewer, larger pins; a full gallery fills every column.
    var cols = Math.max(2, Math.min(maxCols, Math.round(Math.sqrt(list.length * 1.3))));
    var colW = width / cols;
    var cardW = colW * 1.22;
    var heights = [];
    for (var c = 0; c < cols; c++) heights.push(seeded(c, 9) * 36);
    var boxes = [];
    var lastH = [];

    list.forEach(function (photo, i) {
      var col = 0;
      for (var k = 1; k < cols; k++) if (heights[k] < heights[col] - 4) col = k;
      var cardH = cardW * (photo.h / photo.w);
      // Each pin tucks under or over its neighbours, like a crowded board.
      var overlap = heights[col] > 40 ? cardH * (0.16 + seeded(i, 1) * 0.2) : 0;
      // Never cover more than a third of the photo above, however tall this one is.
      if (lastH[col]) overlap = Math.min(overlap, lastH[col] * 0.34);
      var left = col * colW - (cardW - colW) / 2 + (seeded(i, 2) - 0.5) * colW * 0.22;
      left = Math.max(0, Math.min(width - cardW, left));
      var top = heights[col] - overlap;
      heights[col] = top + cardH;
      lastH[col] = cardH;

      var pin = el("button", "pin");
      pin.type = "button";
      pin.setAttribute("data-index", i);
      pin.style.left = left + "px";
      pin.style.top = top + "px";
      pin.style.width = cardW + "px";
      pin.style.height = cardH + "px";
      boxes.push({ pin: pin, x: left, y: top, w: cardW, h: cardH, z: 1 + Math.round(seeded(i, 3) * 60) });
      pin.style.setProperty("--r", ((seeded(i, 4) - 0.5) * 7).toFixed(2) + "deg");
      var img = el("img");
      img.src = photo.thumb || photo.src;
      img.alt = photo.alt;
      // The first screenful loads straight away so the board never arrives empty.
      img.loading = i < 12 ? "eager" : "lazy";
      img.decoding = "async";
      img.width = photo.w;
      img.height = photo.h;
      pin.appendChild(img);
      inner.appendChild(pin);
    });
    raiseBuried(boxes);
    inner.style.height = Math.max.apply(null, heights) + 40 + "px";
    if (fade) inner.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 240, easing: "ease-out" });
  }

  // A crowded board may tuck a pin almost entirely under its neighbours. Any
  // pin showing less than about half of itself comes up on top, so every photo
  // stays tappable.
  function raiseBuried(boxes) {
    var top = 61;
    var raised = true;
    // Lifting one pin can bury another, so look again until the board settles.
    for (var pass = 0; raised && pass < 6; pass++) {
      raised = false;
      boxes.forEach(lift);
    }
    // A very crowded board can keep trading places. Stacking in board order
    // settles it: each pin is then only overlapped by the ones placed after it.
    if (raised) boxes.forEach(function (b, i) { b.z = 1 + i; });
    boxes.forEach(function (b) { b.pin.style.zIndex = String(b.z); });

    function lift(b) {
      var seen = 0;
      var samples = 0;
      for (var sx = 0.1; sx < 1; sx += 0.2) {
        for (var sy = 0.1; sy < 1; sy += 0.2) {
          var px = b.x + b.w * sx;
          var py = b.y + b.h * sy;
          samples++;
          var covered = boxes.some(function (o) {
            return o !== b && o.z > b.z && px > o.x && px < o.x + o.w && py > o.y && py < o.y + o.h;
          });
          if (!covered) seen++;
        }
      }
      if (seen / samples < 0.5) {
        b.z = ++top;
        raised = true;
      }
    }
  }

  // ---------- Opening: through the door and the lace ----------
  function open(cat, originEl, returnFocus, options) {
    options = options || {};
    build();
    state.origin = originEl;
    state.returnFocus = returnFocus || originEl;
    overlay.hidden = false;
    document.documentElement.classList.add("wardrobe-open");
    show(cat, false);
    if (options.fromHash) {
      state.openedFromHash = true;
      history.replaceState({ wardrobe: state.cat }, "", "#wardrobe-" + state.cat);
    } else {
      state.openedFromHash = false;
      history.pushState({ wardrobe: state.cat }, "", "#wardrobe-" + state.cat);
    }
    closeBtn.focus({ preventScroll: true });
    if (!animate || options.fromHash) return;
    portal(originEl);
  }

  function portal(originEl) {
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var rect = originEl.getBoundingClientRect();
    // The doorway shows the gallery's cover, or the first photograph when entering from the link.
    var cover = originEl.querySelector && originEl.querySelector(".work-photo");
    var src = cover ? (cover.currentSrc || cover.src) : (state.list[0] && state.list[0].src);
    var skipping = false;

    var layer = el("div", "portal");
    layer.setAttribute("aria-hidden", "true");
    var dim = el("div", "portal-dim");
    var door = el("div", "portal-door");
    door.style.left = rect.left + "px";
    door.style.top = rect.top + "px";
    door.style.width = rect.width + "px";
    door.style.height = rect.height + "px";
    if (src) door.style.backgroundImage = "url(" + JSON.stringify(src) + ")";
    var vignette = el("div", "portal-vignette");
    var laceL = el("div", "portal-lace portal-lace-l");
    var laceR = el("div", "portal-lace portal-lace-r");
    var seam = el("div", "portal-seam");
    var flash = el("div", "portal-flash");
    var snow = el("div", "portal-snow");
    [dim, door, vignette, laceL, laceR, seam, flash, snow].forEach(function (n) { layer.appendChild(n); });
    document.body.appendChild(layer);
    overlay.style.opacity = "0";

    var running = [];
    var timers = [];
    function play(node, frames, opts) {
      var a = node.animate(frames, Object.assign({ fill: "both" }, opts));
      running.push(a);
      if (skipping) a.finish();
      return a;
    }
    function done() {
      if (!layer.isConnected) return;
      layer.remove();
      overlay.style.opacity = "";
      overlay.getAnimations().forEach(function (a) { a.finish(); });
      document.removeEventListener("keydown", onKey, true);
    }
    function skip() {
      if (skipping) return;
      skipping = true;
      timers.forEach(clearTimeout);
      running.forEach(function (a) { a.finish(); });
      done();
    }
    function onKey(event) { if (event.key === "Escape") { event.stopPropagation(); skip(); } }
    layer.addEventListener("click", skip);
    document.addEventListener("keydown", onKey, true);

    // One timeline, measured from the tap. Every stage overlaps the next so
    // nothing cross-fades on top of anything else.
    var ZOOM = 900;        // the cover rushes toward you
    var CLOSE_AT = 380;    // lace starts drawing shut while the photo is still growing
    var CLOSE = 560;
    var GLOW_AT = CLOSE_AT + CLOSE - 60; // light appears at the seam
    var PART_AT = GLOW_AT + 300;         // the curtains are pushed apart
    var PART = 760;
    var ROOM_AT = PART_AT + 60;
    var END = PART_AT + PART + 240;

    // 1. Walk into the doorway: the cover rushes past the edges of the screen,
    //    brightening; it only softens right at the end, behind the lace.
    var scale = Math.max(vw / rect.width, vh / rect.height) * 1.35;
    var tx = vw / 2 - (rect.left + rect.width / 2);
    var ty = vh / 2 - (rect.top + rect.height / 2);
    play(dim, [{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: "ease-out" });
    play(door, [
      { transform: "none", filter: "brightness(1) blur(0px)" },
      { transform: "translate(" + tx * 0.6 + "px, " + ty * 0.6 + "px) scale(" + scale * 0.45 + ")", filter: "brightness(1.15) blur(0px)", offset: 0.55 },
      { transform: "translate(" + tx + "px, " + ty + "px) scale(" + scale + ")", filter: "brightness(1.45) blur(5px)" }
    ], { duration: ZOOM, easing: "cubic-bezier(0.55, 0, 0.25, 1)" });
    play(vignette, [{ opacity: 0 }, { opacity: 1 }], { duration: ZOOM, easing: "ease-in" });

    // 2. The lace draws shut from both sides, catching the photo through its holes,
    //    and sways a little as it settles.
    var closeTiming = { duration: CLOSE, delay: CLOSE_AT, easing: "cubic-bezier(0.22, 1, 0.36, 1)" };
    play(laceL, [
      { transform: "translateX(-100%) skewX(0deg)" },
      { transform: "translateX(2%) skewX(-3deg)", offset: 0.7 },
      { transform: "translateX(0) skewX(0deg)" }
    ], closeTiming);
    play(laceR, [
      { transform: "translateX(100%) skewX(0deg)" },
      { transform: "translateX(-2%) skewX(3deg)", offset: 0.7 },
      { transform: "translateX(0) skewX(0deg)" }
    ], closeTiming);

    // 3. Light gathers in the gap between the curtains.
    play(seam, [
      { opacity: 0, transform: "scaleY(0.2) scaleX(1)" },
      { opacity: 1, transform: "scaleY(1) scaleX(1)", offset: 0.55 },
      { opacity: 1, transform: "scaleY(1) scaleX(1.6)" }
    ], { duration: PART_AT - GLOW_AT + 120, delay: GLOW_AT, easing: "ease-out" });

    // 4. Push through: the curtains part with a sway, the light floods out and
    //    fades, and the room settles in behind it.
    var partTiming = { duration: PART, delay: PART_AT, easing: "cubic-bezier(0.65, 0, 0.35, 1)" };
    play(laceL, [
      { transform: "translateX(0) skewX(0deg) scaleX(1)" },
      { transform: "translateX(-40%) skewX(6deg) scaleX(0.96)", offset: 0.45 },
      { transform: "translateX(-106%) skewX(2deg) scaleX(0.9)" }
    ], Object.assign({ fill: "forwards" }, partTiming));
    play(laceR, [
      { transform: "translateX(0) skewX(0deg) scaleX(1)" },
      { transform: "translateX(40%) skewX(-6deg) scaleX(0.96)", offset: 0.45 },
      { transform: "translateX(106%) skewX(-2deg) scaleX(0.9)" }
    ], Object.assign({ fill: "forwards" }, partTiming));
    play(seam, [{ opacity: 1, transform: "scaleX(1.6)" }, { opacity: 0, transform: "scaleX(14)" }],
      { duration: 420, delay: PART_AT, easing: "ease-out", fill: "forwards" });
    play(flash, [{ opacity: 0 }, { opacity: 0.85, offset: 0.25 }, { opacity: 0 }],
      { duration: 700, delay: PART_AT, easing: "ease-out" });
    play(door, [{ opacity: 1 }, { opacity: 0 }], { duration: 200, delay: PART_AT + 120, fill: "forwards" });
    play(vignette, [{ opacity: 1 }, { opacity: 0 }], { duration: 500, delay: PART_AT + 120, fill: "forwards" });
    play(dim, [{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: PART_AT + 120, fill: "forwards" });

    timers.push(setTimeout(function () {
      if (skipping) return;
      overlay.style.opacity = "";
      overlay.animate([
        { opacity: 0, transform: "scale(1.06)", filter: "blur(4px)" },
        { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }
      ], { duration: 640, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
      letItSnow(snow, vw, vh, false);
      pinsLand();
    }, ROOM_AT));
    timers.push(setTimeout(done, END + 600));
  }

  // A short flurry, once, as you arrive.
  function letItSnow(snow, vw, vh, skipping) {
    if (skipping) return;
    for (var i = 0; i < 36; i++) {
      var flake = el("span", "flake");
      var x = Math.random() * vw;
      var size = 2 + Math.random() * 3;
      flake.style.left = x + "px";
      flake.style.width = flake.style.height = size + "px";
      snow.appendChild(flake);
      flake.animate([
        { transform: "translate(0, -20px)", opacity: 0 },
        { opacity: 0.9, offset: 0.2 },
        { transform: "translate(" + (Math.random() * 60 - 30) + "px, " + (vh * (0.45 + Math.random() * 0.5)) + "px)", opacity: 0 }
      ], { duration: 1200 + Math.random() * 700, delay: Math.random() * 350, easing: "linear", fill: "both" });
    }
  }

  // The first photos in view settle onto the board, one after another.
  function pinsLand() {
    var pins = Array.prototype.slice.call(inner.querySelectorAll(".pin"));
    var visible = pins.filter(function (p) { return p.offsetTop < board.clientHeight; })
      .sort(function (a, b) { return a.offsetTop - b.offsetTop; })
      .slice(0, 14);
    visible.forEach(function (pin, i) {
      var tilt = pin.style.getPropertyValue("--r");
      pin.animate([
        { opacity: 0, transform: "translateY(-14px) rotate(" + tilt + ") scale(1.04)" },
        { opacity: 1, transform: "rotate(" + tilt + ")" }
      ], { duration: 320, delay: 120 + i * 22, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
    });
  }

  // ---------- Leaving: back out through the door ----------
  function requestClose() {
    if (history.state && history.state.wardrobe && !state.openedFromHash) history.back();
    else close();
  }

  window.addEventListener("popstate", function () {
    if (!overlay || overlay.hidden) {
      var match = /^#wardrobe-(\w+)$/.exec(location.hash);
      if (match) open(match[1], walk, walk, { fromHash: true });
      return;
    }
    if (!(history.state && history.state.wardrobe)) close();
  });

  function close() {
    if (!overlay || overlay.hidden) return;
    if (lightbox && !lightbox.hidden) closeLightbox(true);
    var origin = state.origin;
    var finish = function () {
      overlay.hidden = true;
      overlay.style.clipPath = "";
      overlay.getAnimations().forEach(function (a) { a.cancel(); });
      document.documentElement.classList.remove("wardrobe-open");
      if (state.openedFromHash) history.replaceState(null, "", location.pathname + location.search);
      if (state.returnFocus && state.returnFocus.isConnected) state.returnFocus.focus({ preventScroll: true });
    };
    if (!animate || !origin) return finish();
    document.documentElement.classList.remove("wardrobe-open");
    var r = origin.getBoundingClientRect();
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var onScreen = r.bottom > 0 && r.top < vh;
    var to = onScreen
      ? "inset(" + Math.max(0, r.top) + "px " + Math.max(0, vw - r.right) + "px " + Math.max(0, vh - r.bottom) + "px " + Math.max(0, r.left) + "px)"
      : "inset(50% 50% 50% 50%)";
    overlay.animate([
      { clipPath: "inset(0px 0px 0px 0px)", opacity: 1 },
      { clipPath: to, opacity: 1, offset: 0.85 },
      { clipPath: to, opacity: 0 }
    ], { duration: 480, easing: "cubic-bezier(0.65, 0, 0.35, 1)" }).finished.then(finish, finish);
  }

  // ---------- A single photograph, up close ----------
  function buildLightbox() {
    lightbox = el("div", "lightbox");
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Photograph");
    var figure = el("figure", "lightbox-figure");
    var stage = el("div", "lb-stage");
    var img = el("img", "lightbox-img");
    // The viewer handles its own loading state, photo by photo.
    img.setAttribute("data-manual", "");
    var preview = el("img", "lb-preview");
    preview.alt = "";
    preview.setAttribute("aria-hidden", "true");
    var wax = el("div", "lb-wax");
    wax.setAttribute("aria-hidden", "true");
    wax.innerHTML = WAX;
    var candle = el("div", "lb-candle");
    candle.setAttribute("aria-hidden", "true");
    candle.innerHTML = CANDLE;
    var caption = el("figcaption", "lightbox-caption");
    stage.appendChild(img);
    stage.appendChild(preview);
    stage.appendChild(wax);
    stage.appendChild(candle);
    figure.appendChild(stage);
    figure.appendChild(caption);
    var prev = el("button", "lightbox-nav lightbox-prev", "Previous");
    var next = el("button", "lightbox-nav lightbox-next", "Next");
    var back = el("button", "lightbox-close", "Back to the board");
    [prev, next, back].forEach(function (b) { b.type = "button"; });
    prev.addEventListener("click", function () { step(-1); });
    next.addEventListener("click", function () { step(1); });
    back.addEventListener("click", function () { closeLightbox(); });
    lightbox.addEventListener("click", function (event) { if (event.target === lightbox) closeLightbox(); });
    lightbox.appendChild(figure);
    lightbox.appendChild(prev);
    lightbox.appendChild(next);
    lightbox.appendChild(back);
    overlay.appendChild(lightbox);

    lightbox.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { event.preventDefault(); step(1); }
      else if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); }
      else trapFocus(event, lightbox);
    });

    // Swipe between photos on touch screens.
    var startX = null;
    figure.addEventListener("pointerdown", function (event) { startX = event.clientX; });
    figure.addEventListener("pointerup", function (event) {
      if (startX == null) return;
      var dx = event.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    });
  }

  // Size the frame to the photo before it arrives, so the loading state has
  // the right shape and the previous photo never lingers.
  function fitBox(photo) {
    var maxW = Math.min(lightbox.clientWidth - 32, 1100);
    var maxH = window.innerHeight - 180;
    var scale = Math.min(maxW / photo.w, maxH / photo.h, 1);
    return { w: Math.round(photo.w * scale), h: Math.round(photo.h * scale) };
  }

  // While a photo loads a candle burns down over its softened preview. If the
  // wait runs past two seconds, the candle gutters out and its wax runs down
  // the frame, and the photo comes sharp behind the wax. Quick loads simply
  // sharpen.
  var CANDLE =
    '<svg viewBox="0 0 40 72" aria-hidden="true" focusable="false">' +
      '<path class="lb-smoke" d="M20 22c-3-4 3-7 0-11s2-6 0-9" fill="none" stroke="#D9D2C5" stroke-width="1.4" stroke-linecap="round"/>' +
      '<g class="lb-top">' +
        '<path class="lb-flame" d="M20 10c4 6 7 10 7 15a7 7 0 0 1-14 0c0-5 3-9 7-15Z" fill="#F2EEE6"/>' +
        '<path d="M20 26v6" stroke="#8C8983" stroke-width="1.5" stroke-linecap="round"/>' +
      '</g>' +
      '<rect class="lb-body" x="13" y="32" width="14" height="36" rx="1.5" fill="#F2EEE6" opacity="0.9"/>' +
    "</svg>";
  var WAX =
    '<svg viewBox="0 0 400 48" preserveAspectRatio="none" aria-hidden="true" focusable="false">' +
      '<path d="M0 0H400V16c-8 0-9 8-11 18s-7 10-8 0-3-12-14-12-10 6-12 10-6 4-7-2-6-8-20-8-14 14-16 26-8 12-9 0-4-18-16-18-14 4-17 9-6 5-7-1-8-8-22-8-16 8-18 16-7 9-8 0-6-15-19-15-12 3-14 7-6 4-7-1-7-6-19-6-16 12-18 24-8 10-9-1-5-22-17-22-13 5-15 10-6 3-7-3-8-7-20-7-15 9-17 17-7 8-8-2-4-14-15-14-12 4-14 9-5 3-6-2-6-6-13-6Z" fill="#F2EEE6"/>' +
    "</svg>";

  var showing = 0;
  var burning = [];
  function stopBurning() {
    burning.forEach(function (a) { a.cancel(); });
    burning = [];
  }

  function render(direction) {
    var photo = state.list[state.lightboxIndex];
    var img = lightbox.querySelector(".lightbox-img");
    var stage = lightbox.querySelector(".lb-stage");
    var preview = lightbox.querySelector(".lb-preview");
    var candle = lightbox.querySelector(".lb-candle");
    var caption = lightbox.querySelector(".lightbox-caption");
    var mine = ++showing;
    var box = fitBox(photo);
    var label = titles[photo.category] + " · " + (state.lightboxIndex + 1) + " of " + state.list.length;
    var started = performance.now();

    stopBurning();
    var wax = stage.querySelector(".lb-wax");
    wax.classList.remove("is-settled");
    wax.style.opacity = "0";
    wax.style.transform = "";
    preview.style.clipPath = "";
    stage.style.width = box.w + "px";
    stage.style.height = box.h + "px";
    stage.classList.add("is-loading");
    // The sharp layer stays empty until the full size is in hand, so the
    // previous photo can never show through.
    img.classList.remove("is-broken");
    img.removeAttribute("src");
    img.alt = photo.alt;
    img.width = photo.w;
    img.height = photo.h;
    preview.src = photo.thumb || photo.src;
    preview.style.opacity = "1";
    caption.textContent = label;
    lightbox.setAttribute("aria-busy", "true");
    if (animate && direction) {
      burning.push(stage.animate([
        { opacity: 0, transform: "translateX(" + direction * 18 + "px)" },
        { opacity: 1, transform: "none" }
      ], { duration: 200, easing: "cubic-bezier(0.25, 1, 0.5, 1)" }));
    }
    if (animate) {
      // The candle burns down slowly for as long as the photo takes.
      var burn = { duration: 9000, easing: "cubic-bezier(0.2, 0.6, 0.4, 1)", fill: "forwards" };
      burning.push(candle.querySelector(".lb-body").animate([{ transform: "scaleY(1)" }, { transform: "scaleY(0.3)" }], burn));
      burning.push(candle.querySelector(".lb-top").animate([{ transform: "translateY(0)" }, { transform: "translateY(25px)" }], burn));
    }

    function done() {
      if (mine !== showing) return;
      stage.classList.remove("is-loading", "is-melting");
      preview.style.opacity = "0";
      stopBurning();
      lightbox.setAttribute("aria-busy", "false");
      preloadNeighbours();
    }

    var loader = new Image();
    loader.decoding = "async";
    loader.onload = function () {
      if (mine !== showing) return;
      // The image that just loaded becomes the sharp layer itself, so nothing
      // has to be fetched or decoded again behind the wax.
      loader.className = "lightbox-img";
      loader.alt = photo.alt;
      loader.width = photo.w;
      loader.height = photo.h;
      loader.setAttribute("data-manual", "");
      img.replaceWith(loader);
      var slow = performance.now() - started > 2000;
      if (animate && slow) melt(stage, preview, candle, box.h, mine, done);
      else done();
    };
    loader.onerror = function () {
      if (mine !== showing) return;
      stopBurning();
      stage.classList.remove("is-loading");
      preview.style.opacity = "0";
      img.classList.add("is-broken");
      img.src = window.MusePhotos ? window.MusePhotos.MISSING : "";
      caption.textContent = label + " · didn't load";
      lightbox.setAttribute("aria-busy", "false");
    };
    loader.src = photo.src;
  }

  // The flame gutters out, the stub melts, and the wax runs down the frame.
  // Where the wax has passed, the blurred preview is gone and the photo is sharp.
  function melt(stage, preview, candle, height, mine, done) {
    var wax = stage.querySelector(".lb-wax");
    var band = wax.offsetHeight;
    var fill = { fill: "forwards" };
    stage.classList.add("is-melting");
    burning.push(candle.querySelector(".lb-flame").animate([
      { transform: "scale(1)", opacity: 1 },
      { transform: "scale(1.15, 0.7)", opacity: 0.8, offset: 0.4 },
      { transform: "scale(0.2, 0.1)", opacity: 0 }
    ], Object.assign({ duration: 320, easing: "ease-in" }, fill)));
    burning.push(candle.querySelector(".lb-smoke").animate([
      { opacity: 0, transform: "translateY(4px)" },
      { opacity: 0.75, transform: "translateY(-4px)", offset: 0.3 },
      { opacity: 0, transform: "translateY(-16px)" }
    ], Object.assign({ duration: 900, delay: 220, easing: "ease-out" }, fill)));
    burning.push(candle.animate([
      { opacity: 1, transform: "translateY(0) scaleY(1)" },
      { opacity: 0, transform: "translateY(10px) scaleY(0.4)" }
    ], Object.assign({ duration: 360, delay: 520, easing: "ease-in" }, fill)));

    // The wax and the sharp edge are driven from one value each frame, so
    // they can't drift apart. The edge sits behind the wax's solid body:
    // above it the photo is sharp, below it still blurred.
    var BODY = 16 / 48;            // solid band at the top of the wax drawing
    var pool = band * 0.62;        // how much of the wax rests in the frame at the end
    var from = -band;
    var to = height - pool;
    var DURATION = 950;
    var DELAY = 700;
    var t0 = performance.now() + DELAY;
    wax.style.opacity = "1";
    wax.style.transform = "translateY(" + from + "px)";
    // Gathers speed for three quarters of the drop, then eases as it lands.
    function ease(t) { return t < 0.75 ? t * t / 0.75 : 1 - (1 - t) * (1 - t) / 0.25; }
    function frame(now) {
      if (mine !== showing) return;
      var t = Math.max(0, Math.min(1, (now - t0) / DURATION));
      var y = from + (to - from) * ease(t);
      var edge = Math.min(height, Math.max(0, y + band * BODY * 0.8));
      wax.style.transform = "translateY(" + y + "px)";
      preview.style.clipPath = "inset(" + edge + "px 0 0 0)";
      if (t < 1) requestAnimationFrame(frame);
      else settle();
    }
    requestAnimationFrame(frame);

    // It comes to rest: the drips draw back into a pool along the bottom.
    function settle() {
      preview.style.opacity = "0";
      var art = wax.querySelector("svg");
      burning.push(art.animate([
        { transform: "scaleY(1)" },
        { transform: "scaleY(1.12)", offset: 0.35 },
        { transform: "scaleY(0.62)" }
      ], { duration: 520, easing: "cubic-bezier(0.3, 0.7, 0.3, 1)", fill: "forwards" }));
      wax.classList.add("is-settled");
      done();
    }
  }

  // The photos either side load quietly, so stepping through feels instant.
  function preloadNeighbours() {
    var n = state.list.length;
    [1, -1].forEach(function (d) {
      var next = state.list[(state.lightboxIndex + d + n) % n];
      if (next) new Image().src = next.src;
    });
  }


  function openLightbox(index, pin) {
    state.lightboxIndex = index;
    state.lightboxFrom = pin;
    lightbox.hidden = false;
    document.documentElement.classList.add("lightbox-open");
    render(0);
    var img = lightbox.querySelector(".lb-stage");
    if (animate && pin) {
      // Grow from the pinned photo that was tapped.
      var from = pin.getBoundingClientRect();
      var to = img.getBoundingClientRect();
      if (to.width) {
        img.animate([
          { transform: "translate(" + (from.left + from.width / 2 - (to.left + to.width / 2)) + "px, " + (from.top + from.height / 2 - (to.top + to.height / 2)) + "px) scale(" + from.width / to.width + ")" },
          { transform: "none" }
        ], { duration: 300, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
      }
      lightbox.animate([{ backgroundColor: "rgba(10, 10, 10, 0)" }, { backgroundColor: "rgba(10, 10, 10, 0.94)" }], { duration: 240 });
    }
    lightbox.querySelector(".lightbox-close").focus({ preventScroll: true });
  }

  function step(delta) {
    var n = state.list.length;
    state.lightboxIndex = (state.lightboxIndex + delta + n) % n;
    render(delta);
    state.lightboxFrom = inner.querySelector('.pin[data-index="' + state.lightboxIndex + '"]');
  }

  function closeLightbox(instant) {
    var restore = state.lightboxFrom;
    var hide = function () {
      lightbox.hidden = true;
      document.documentElement.classList.remove("lightbox-open");
      if (!instant && restore && restore.isConnected) restore.focus({ preventScroll: true });
    };
    if (!animate || instant) return hide();
    lightbox.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150, easing: "ease-out" }).finished.then(hide, hide);
  }

  // ---------- Keyboard ----------
  function trapFocus(event, container) {
    if (event.key !== "Tab") return;
    var items = Array.prototype.filter.call(
      container.querySelectorAll("button, [href], input, select, textarea"),
      function (n) { return !n.disabled && n.offsetParent !== null && !(lightbox && !lightbox.hidden && container === overlay && !lightbox.contains(n)); }
    );
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape" || !overlay || overlay.hidden) return;
    if (!lightbox.hidden) closeLightbox();
    else requestClose();
  });

  // Links like index.html#wardrobe-candlelit open straight into a gallery.
  var linked = /^#wardrobe-(\w+)$/.exec(location.hash);
  if (linked) open(linked[1], walk, walk, { fromHash: true });
})();

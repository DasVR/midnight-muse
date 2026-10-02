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

    list.forEach(function (photo, i) {
      var col = 0;
      for (var k = 1; k < cols; k++) if (heights[k] < heights[col] - 4) col = k;
      var cardH = cardW * (photo.h / photo.w);
      // Each pin tucks under or over its neighbours, like a crowded board.
      var overlap = heights[col] > 40 ? cardH * (0.16 + seeded(i, 1) * 0.2) : 0;
      var left = col * colW - (cardW - colW) / 2 + (seeded(i, 2) - 0.5) * colW * 0.22;
      left = Math.max(0, Math.min(width - cardW, left));
      var top = heights[col] - overlap;
      heights[col] = top + cardH;

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
  // pin showing less than about 40% of itself comes up on top, so every photo
  // stays tappable.
  function raiseBuried(boxes) {
    var top = 61;
    var raised = true;
    // Lifting one pin can bury another, so look again until the board settles.
    for (var pass = 0; raised && pass < 6; pass++) {
      raised = false;
      boxes.forEach(lift);
    }
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
      if (seen / samples < 0.4) {
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
    var img = el("img", "lightbox-img");
    var caption = el("figcaption", "lightbox-caption");
    figure.appendChild(img);
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

  function render(direction) {
    var photo = state.list[state.lightboxIndex];
    var img = lightbox.querySelector(".lightbox-img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.width = photo.w;
    img.height = photo.h;
    lightbox.querySelector(".lightbox-caption").textContent =
      titles[photo.category] + " · " + (state.lightboxIndex + 1) + " of " + state.list.length;
    if (animate && direction) {
      img.animate([
        { opacity: 0, transform: "translateX(" + direction * 18 + "px)", filter: "blur(2px)" },
        { opacity: 1, transform: "none", filter: "blur(0)" }
      ], { duration: 200, easing: "cubic-bezier(0.25, 1, 0.5, 1)" });
    }
  }

  function openLightbox(index, pin) {
    state.lightboxIndex = index;
    state.lightboxFrom = pin;
    lightbox.hidden = false;
    render(0);
    var img = lightbox.querySelector(".lightbox-img");
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

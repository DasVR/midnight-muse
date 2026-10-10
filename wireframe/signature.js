// Dani's signature draws itself, stroke by stroke, the first time it
// scrolls into view. Each <img class="signature"> is swapped for the inline
// SVG from assets/signature-dani.svg so its strokes can be animated; if
// anything fails, the <img> stays and simply shows the finished signature.
(function () {
  var imgs = Array.prototype.slice.call(document.querySelectorAll("img.signature"));
  if (!imgs.length || !window.fetch || !window.DOMParser) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var PEN_SPEED = 260; // viewBox units per second, roughly a calm hand

  fetch(imgs[0].getAttribute("src"))
    .then(function (res) { return res.ok ? res.text() : Promise.reject(res.status); })
    .then(function (text) {
      var source = new DOMParser().parseFromString(text, "image/svg+xml").querySelector("svg");
      if (!source) return;
      imgs.forEach(function (img) { inline(img, source); });
    })
    .catch(function () {});

  function inline(img, source) {
    var svg = document.importNode(source, true);
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.setAttribute("class", "signature");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", img.getAttribute("alt") || "Dani");
    svg.setAttribute("focusable", "false");
    img.replaceWith(svg);

    if (reduce || !("IntersectionObserver" in window)) return;

    // Time each stroke by its length so the pen keeps one pace, and start
    // each where the last one ended, with a short lift in between.
    var at = 0;
    svg.querySelectorAll("path").forEach(function (path) {
      var len = path.getTotalLength();
      var dur = Math.max(0.18, len / PEN_SPEED);
      path.setAttribute("pathLength", "1");
      path.style.setProperty("--sig-delay", at.toFixed(2) + "s");
      path.style.setProperty("--sig-dur", dur.toFixed(2) + "s");
      at += dur + 0.12;
    });
    svg.classList.add("is-waiting");

    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      svg.classList.add("is-drawing");
      io.disconnect();
    }, { threshold: 0.6 });
    io.observe(svg);
  }
})();

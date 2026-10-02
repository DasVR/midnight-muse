// Loading and failed states for every photograph on the page. A photo is any
// <img> with alt text (decorative images have alt=""). While it loads it shows
// a developing sheen with a candle; if it fails it swaps to an empty frame.
(function () {
  var MISSING = "assets/photo-missing.svg";

  function settle(img) {
    img.classList.remove("is-loading");
  }

  function fail(img) {
    if (img.classList.contains("is-broken")) return;
    img.classList.remove("is-loading");
    img.classList.add("is-broken");
    img.setAttribute("data-failed-src", img.getAttribute("src") || "");
    img.title = "This photograph didn't load";
    // Swapped on the next tick: a new src set inside the error event is ignored.
    img.loading = "eager";
    setTimeout(function () { img.src = MISSING; }, 0);
  }

  function watch(img) {
    if (!img || img.hasAttribute("data-photo") || !img.getAttribute("alt") || img.hasAttribute("data-manual")) return;
    img.setAttribute("data-photo", "");
    img.addEventListener("load", function () { if (!img.classList.contains("is-broken")) settle(img); });
    img.addEventListener("error", function () { fail(img); });
    if (img.complete && img.getAttribute("src")) {
      if (img.naturalWidth) settle(img);
      else fail(img);
    } else {
      img.classList.add("is-loading");
    }
  }

  function scan(root) {
    if (root.tagName === "IMG") watch(root);
    else if (root.querySelectorAll) Array.prototype.forEach.call(root.querySelectorAll("img"), watch);
  }

  scan(document);
  // Photos added later (the wardrobe board) are picked up as they arrive.
  new MutationObserver(function (records) {
    records.forEach(function (record) {
      Array.prototype.forEach.call(record.addedNodes, function (node) { if (node.nodeType === 1) scan(node); });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.MusePhotos = { watch: watch, fail: fail, MISSING: MISSING };
})();

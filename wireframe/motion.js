// Page motion that isn't tied to one feature:
// - four chosen groups (gallery covers, sets, the blind date steps and the
//   kind words letters) rise into place once, the first time they're seen,
//   and never again on the way back up;
// - on a desktop, a gallery cover lights up where the pointer holds a candle
//   to it.
// The page is complete without this file; it only adds motion on top.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;

  // ---------- Reveals ----------
  var GROUPS = [".work-grid", ".sets-layout", ".blind-steps", ".letters"];

  if (!reduce && "IntersectionObserver" in window) {
    var targets = [];
    GROUPS.forEach(function (sel) {
      var group = document.querySelector(sel);
      if (!group) return;
      var kids = Array.prototype.slice.call(group.children);
      kids.forEach(function (kid) { kid.setAttribute("data-reveal", ""); });
      // A sideways strip (the sets, on phones and tablets) arrives as one row: its
      // off-screen items can't be seen by the observer until they're swiped to.
      var strip = /auto|scroll/.test(getComputedStyle(group).overflowX);
      targets = targets.concat(strip ? [group] : kids);
    });
    root.classList.add("reveal-ready");

    // Otherwise each item is watched on its own, so a phone (one cover per
    // screen) sees every cover arrive. Items that arrive together are
    // staggered in reading order.
    var seen = new IntersectionObserver(function (entries) {
      var arriving = [];
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        seen.unobserve(entry.target);
        if (entry.target.hasAttribute("data-reveal")) arriving.push(entry.target);
        else arriving = arriving.concat(Array.prototype.slice.call(entry.target.children));
      });
      arriving
        .map(function (el) { return { el: el, r: el.getBoundingClientRect() }; })
        .sort(function (a, b) { return (a.r.top - b.r.top) || (a.r.left - b.r.left); })
        .forEach(function (item, i) {
          item.el.style.setProperty("--i", Math.min(i, 5));
          item.el.classList.add("is-in");
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(function (target) { seen.observe(target); });
  }

  // ---------- Candlelight on the gallery covers (mouse and trackpad only) ----------
  if (!reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    Array.prototype.forEach.call(document.querySelectorAll(".work-frame"), function (frame) {
      var queued = false;
      var x = 0;
      var y = 0;
      frame.addEventListener("pointermove", function (event) {
        var r = frame.getBoundingClientRect();
        x = event.clientX - r.left;
        y = event.clientY - r.top;
        if (queued) return;
        queued = true;
        requestAnimationFrame(function () {
          queued = false;
          frame.style.setProperty("--lx", x + "px");
          frame.style.setProperty("--ly", y + "px");
        });
      });
    });
  }
})();

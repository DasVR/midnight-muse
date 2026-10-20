// Dani's intro, the first time it's seen:
// - the greeting is written in and a little heart draws itself, then beats once;
// - "dreams" comes into focus like a lens finding it, "real life photos" gets
//   underlined and "YOU" gets circled, as if she'd marked up her own note;
// - her portrait pulls into focus while the ring light behind it glows.
// It runs once and never again on the way back up. The ring light only breathes
// while the section is on screen.
// "Tell me your dream" opens the booking letter at the vision line.
// The page is complete without this file; it only adds motion on top.
(function () {
  var meet = document.getElementById("meet");
  if (!meet) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- The intro arrives ----------
  if (!reduce && "IntersectionObserver" in window) {
    meet.classList.add("intro-ready");

    var arrive = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      meet.classList.add("is-in");
      arrive.disconnect();
    }, { threshold: 0.3 });
    arrive.observe(meet);

    // The ring light glows only while you can see it.
    new IntersectionObserver(function (entries) {
      meet.classList.toggle("halo-on", entries[0].isIntersecting);
    }).observe(meet);
  }

  // ---------- "Tell me your dream" ----------
  var cta = meet.querySelector("[data-dream]");
  var vision = document.getElementById("vision");
  if (!cta || !vision) return;
  var fine = window.matchMedia("(pointer: fine)").matches;

  cta.addEventListener("click", function (event) {
    event.preventDefault();
    if (!vision.placeholder) vision.placeholder = "The dream, in your own words: the mood, the light, the little world you'd like to step into.";
    var field = vision.closest(".field") || vision;
    field.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    // On a desktop the pen is ready in the vision line; on a phone the form takes
    // focus instead, so the keyboard doesn't pop up mid-scroll.
    if (fine) vision.focus({ preventScroll: true });
    else if (vision.form) vision.form.focus({ preventScroll: true });
    if (reduce) return;
    field.classList.remove("is-beckoned");
    void field.offsetWidth;
    field.classList.add("is-beckoned");
  });

  document.addEventListener("animationend", function (event) {
    if (event.animationName === "beckon") event.target.classList.remove("is-beckoned");
  });
})();

// Feature: Write back to Dani (write-back.html).
//
// A client writes a short letter about their shoot. On "Seal your letter"
// it is copied to their clipboard and they're pointed to Dani's Google
// review page to paste it, so the reply also helps her local search.
// Nothing is sent anywhere by this page.
(function () {
  // Dani's Google Business "write a review" link, e.g.
  // https://g.page/r/XXXXXXXX/review  (to come from Dani)
  var GOOGLE_REVIEW_URL = "";

  var form = document.getElementById("wb-form");
  var sealed = document.getElementById("wb-sealed");
  if (!form || !sealed) return;

  var review = document.getElementById("wb-review");
  var draft = document.getElementById("wb-review-draft");
  var copied = document.getElementById("wb-copied");
  var copyOut = document.getElementById("wb-letter-copy");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var name = form.elements.name.value.trim();
    var shoot = form.elements.shoot.value;
    var letter = form.elements.letter.value.trim();
    var text = letter + "\n\n" + name + " · " + shoot;

    copyOut.textContent = text;

    if (GOOGLE_REVIEW_URL) {
      review.href = GOOGLE_REVIEW_URL;
    } else {
      review.hidden = true;
      draft.hidden = false;
    }

    var done = function (ok) {
      if (!ok) copied.textContent = "Copy your letter below, then paste it as a Google review so other people looking for Dani can read it too:";
      form.hidden = true;
      sealed.hidden = false;
      sealed.querySelector("h2").setAttribute("tabindex", "-1");
      sealed.querySelector("h2").focus();
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else {
      done(false);
    }
  });
})();

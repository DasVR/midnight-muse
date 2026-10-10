// Feature: Welcome back. Delete this file and the line marked
// "feature:welcome-back" in index.html to remove it.
//
// Remembers (in this browser only) the last gallery a visitor unlocked or
// stepped into. On their next visit the hero shows that gallery's cover and
// the price ribbon asks "Back for more Y2K?". First visits are unchanged.
(function () {
  var KEY = "midnight-muse:last-gallery";
  var cards = Array.prototype.slice.call(document.querySelectorAll(".work-card[data-gallery]"));
  if (!cards.length) return;

  function read() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function remember(card) {
    try { window.localStorage.setItem(KEY, card.getAttribute("data-gallery")); } catch (e) {}
  }

  // --- Greet a returning visitor -------------------------------------------
  var saved = read();
  var match = cards.filter(function (c) { return c.getAttribute("data-gallery") === saved; })[0];
  var heroPhoto = document.querySelector(".hero-photo");
  var ribbon = document.querySelector(".price-ribbon");

  if (match && heroPhoto && ribbon) {
    var cover = match.querySelector(".work-photo");
    var title = match.querySelector("h3");
    if (cover) {
      // The hero has a srcset, which wins over src, so carry the cover's over too.
      var coverSet = cover.getAttribute("srcset");
      if (coverSet) heroPhoto.setAttribute("srcset", coverSet);
      else heroPhoto.removeAttribute("srcset");
      heroPhoto.setAttribute("src", cover.getAttribute("src"));
      heroPhoto.setAttribute("alt", cover.getAttribute("alt") || "");
    }
    if (title && ribbon.firstChild && ribbon.firstChild.nodeType === 3) {
      // Keep the price in the ribbon; only the opening words change.
      ribbon.firstChild.nodeValue = "Back for more " + title.textContent.trim() + "? Sessions from $100 ";
    }
  }

  // --- Remember what they open this time -----------------------------------
  cards.forEach(function (card) {
    var wasUnlocked = card.classList.contains("is-unlocked");
    new MutationObserver(function () {
      var now = card.classList.contains("is-unlocked");
      if (now && !wasUnlocked) remember(card);
      wasUnlocked = now;
    }).observe(card, { attributes: true, attributeFilter: ["class"] });

    // "Step inside" opens that gallery in the wardrobe: count it too.
    card.addEventListener("click", function (event) {
      if (event.target.closest(".step-inside")) remember(card);
    });
  });
})();

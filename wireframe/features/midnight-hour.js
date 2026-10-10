// Feature: Midnight Hour. Delete this file, features/midnight-hour.css and the
// two lines marked "feature:midnight-hour" in index.html to remove it.
//
// Between 12:00 and 12:59 am Florida time the site turns darker: the lace
// dims, the hero changes to the candlelit set, and a Midnight Hour session
// can be asked for. Add ?midnight=1 to the URL to see it at any hour.
(function () {
  var root = document.documentElement;
  var heroCopy = document.querySelector(".hero-copy");
  var heroPhoto = document.querySelector(".hero-photo");
  if (!heroCopy || !heroPhoto) return;

  var forced = /[?&]midnight=1\b/.test(location.search);
  var dayPhoto = {
    src: heroPhoto.getAttribute("src"),
    srcset: heroPhoto.getAttribute("srcset"),
    alt: heroPhoto.getAttribute("alt")
  };
  var nightPhoto = {
    src: "img/sized/IMG_6754-1067.webp",
    srcset: "img/sized/IMG_6754-480.webp 480w, img/sized/IMG_6754-800.webp 800w, img/sized/IMG_6754-1067.webp 1067w",
    alt: "Woman with black lipstick reclines on a floral bed holding a candle, a brass candelabra lit behind her against red velvet."
  };

  var aside = document.createElement("aside");
  aside.className = "midnight-note";
  aside.setAttribute("aria-label", "The Midnight Hour");
  aside.innerHTML =
    '<p class="midnight-time">12:00 – 12:59 am</p>' +
    '<p class="midnight-line">You found the Midnight Hour. Ask for a session tonight and Dani will build it after dark.</p>' +
    '<a class="midnight-ask" href="#book">Ask for a Midnight Hour session</a>' +
    '<span class="faq-draft">Offer details to come from Dani.</span>';
  heroCopy.appendChild(aside);

  aside.querySelector(".midnight-ask").addEventListener("click", function () {
    var vision = document.getElementById("vision");
    if (vision && vision.value.indexOf("Midnight Hour") === -1) {
      vision.value = "Midnight Hour session. " + vision.value;
    }
  });

  function isMidnight() {
    if (forced) return true;
    try {
      var hour = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York", hour: "numeric", hourCycle: "h23"
      }).format(new Date());
      return Number(hour) === 0;
    } catch (e) {
      return false;
    }
  }

  function apply() {
    var on = isMidnight();
    if (on === root.classList.contains("midnight")) return;
    root.classList.toggle("midnight", on);
    var photo = on ? nightPhoto : dayPhoto;
    // The hero has a srcset, which wins over src, so swap both.
    if (photo.srcset) heroPhoto.setAttribute("srcset", photo.srcset);
    else heroPhoto.removeAttribute("srcset");
    heroPhoto.setAttribute("src", photo.src);
    heroPhoto.setAttribute("alt", photo.alt);
  }

  apply();
  // Catch the hour turning while the page is open.
  setInterval(apply, 60 * 1000);
})();

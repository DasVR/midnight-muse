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
  var dayPhoto = { src: heroPhoto.getAttribute("src"), alt: heroPhoto.getAttribute("alt") };
  var nightPhoto = {
    src: "img/IMG_6754.jpg",
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
    heroPhoto.setAttribute("src", photo.src);
    heroPhoto.setAttribute("alt", photo.alt);
  }

  apply();
  // Catch the hour turning while the page is open.
  setInterval(apply, 60 * 1000);
})();

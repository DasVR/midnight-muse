(function () {
  var marks = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];
  var banner = document.getElementById("draft-banner");
  var notesBtn = document.getElementById("notes-toggle");
  var menuBtn = document.getElementById("menu-toggle");
  var overlay = document.getElementById("nav-overlay");
  var form = document.getElementById("book-form");
  var status = document.getElementById("form-status");
  var shootType = document.getElementById("shoot-type");
  var packageField = document.getElementById("package");
  var scroller = document.getElementById("tier-scroller");
  var standIn = document.getElementById("stand-in");
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[role='tab']"));

  var sessions = {
    portraits: {
      standIn: false,
      tiers: [
        { num: "I", name: "Mini", price: "$100", rows: [["Session", "30 min"], ["Edited photos", "5–10+"], ["Locations", "1"], ["Travel", "20 min"]] },
        { num: "II", name: "Basic", price: "$175", rows: [["Session", "1 hr"], ["Edited photos", "15–25+"], ["Locations", "1–2"], ["Travel", "35 min"]] },
        { num: "III", name: "Styled", price: "$250", badge: "MOST BOOKED", perk: "+ outfit options", rows: [["Session", "1 hr"], ["Edited photos", "20+"], ["Locations", "1–2"], ["Travel", "35 min"]] },
        { num: "IV", name: "Complete", price: "$325", perk: "+ curated outfits & props", rows: [["Session", "1.5 hr"], ["Edited photos", "20+"], ["Locations", "1–2"], ["Travel", "40 min"]] },
        { num: "V", name: "Muse", price: "$475", perk: "+ curated outfits, props & backdrop", rows: [["Session", "2 hr"], ["Edited photos", "25+"], ["Locations", "1"]] }
      ]
    },
    couples: {
      standIn: true,
      tiers: blankTiers(5)
    },
    graduations: {
      standIn: true,
      tiers: blankTiers(3)
    },
    branding: {
      standIn: true,
      tiers: blankTiers(4)
    }
  };

  function blankTiers(count) {
    var numerals = ["I", "II", "III", "IV", "V"];
    var tiers = [];
    for (var i = 0; i < count; i += 1) {
      tiers.push({
        num: numerals[i],
        name: "Package",
        price: "Confirm",
        rows: [["Session", "—"], ["Edited photos", "—"], ["Locations", "—"], ["Travel", "—"]]
      });
    }
    return tiers;
  }

  function measureBanner() {
    var height = !banner || banner.hidden ? 0 : banner.offsetHeight;
    document.documentElement.style.setProperty("--banner-h", height + "px");
  }

  document.querySelectorAll("[data-note]").forEach(function (el, index) {
    var tag = document.createElement("p");
    tag.className = "note-tag";
    tag.textContent = (marks[index] || String(index + 1)) + " " + el.getAttribute("data-note");
    el.insertBefore(tag, el.firstChild);
  });

  if (banner) {
    document.getElementById("dismiss-banner").addEventListener("click", function () {
      banner.hidden = true;
      document.body.classList.remove("has-banner");
      measureBanner();
    });
    measureBanner();
    window.addEventListener("resize", measureBanner);
  }

  notesBtn.addEventListener("click", function () {
    var on = document.body.classList.toggle("notes-on");
    notesBtn.setAttribute("aria-pressed", String(on));
    notesBtn.textContent = on ? "Hide notes" : "Show notes";
  });

  function setMenu(open) {
    overlay.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    if (open) {
      var close = overlay.querySelector("button, a");
      if (close) close.focus();
    }
  }

  menuBtn.addEventListener("click", function () {
    setMenu(overlay.hidden);
  });

  overlay.querySelector(".close-menu").addEventListener("click", function () {
    setMenu(false);
    menuBtn.focus();
  });

  overlay.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !overlay.hidden) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  function corners() {
    return ["tl", "tr", "br", "bl"].map(function (side) {
      return '<img class="corner ' + side + '" src="assets/corner.svg" alt="">';
    }).join("");
  }

  function renderTiers(key) {
    var session = sessions[key];
    standIn.hidden = !session.standIn;
    scroller.innerHTML = session.tiers.map(function (tier) {
      var rows = tier.rows.map(function (row) {
        return "<li><span>" + row[0] + "</span><span class=\"leader\" aria-hidden=\"true\"></span><span>" + row[1] + "</span></li>";
      }).join("");
      var badge = tier.badge ? '<p class="badge">' + tier.badge + "</p>" : "";
      var perk = tier.perk ? '<p class="perk">' + tier.perk + "</p>" : "";
      return '<article class="tier frame">' + corners() + badge +
        '<p class="tier-num">' + tier.num + "</p>" +
        '<h3 class="tier-name">' + tier.name + "</h3>" +
        '<p class="price">' + tier.price + "</p>" +
        '<ul class="specs">' + rows + "</ul>" + perk +
        "</article>";
    }).join("");
    scroller.scrollLeft = 0;
  }

  function fillPackages(key) {
    var previous = packageField.value;
    packageField.innerHTML = "";
    sessions[key].tiers.forEach(function (tier) {
      var option = document.createElement("option");
      option.value = tier.num;
      option.textContent = tier.num + " " + tier.name + " — " + tier.price;
      packageField.appendChild(option);
    });
    if (previous) packageField.value = previous;
    if (packageField.selectedIndex < 0) packageField.selectedIndex = 0;
  }

  function selectTab(tab) {
    var key = tab.getAttribute("data-session");
    tabs.forEach(function (item) {
      var selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    document.getElementById("session-panel").setAttribute("aria-labelledby", tab.id);
    renderTiers(key);
    if (shootType.value === key) fillPackages(key);
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      selectTab(tab);
    });
    tab.addEventListener("keydown", function (event) {
      var next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      tabs[next].focus();
      selectTab(tabs[next]);
    });
  });

  shootType.addEventListener("change", function () {
    fillPackages(shootType.value);
  });

  renderTiers("portraits");
  fillPackages("portraits");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.hidden = false;
  });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".js-reveal").forEach(function (el) {
      gsap.from(el, {
        y: 16,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
    });
    gsap.utils.toArray(".js-photo").forEach(function (el) {
      gsap.fromTo(el, { filter: "grayscale(1)" }, {
        filter: "grayscale(0)",
        duration: 0.9,
        ease: "power1.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
      });
    });
    gsap.utils.toArray(".js-work").forEach(function (el) {
      gsap.fromTo(el, { filter: "grayscale(1)" }, {
        filter: "grayscale(0.6)",
        duration: 0.9,
        ease: "power1.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
        onComplete: function () {
          el.style.filter = "";
          el.classList.add("is-resting");
        }
      });
    });
    gsap.utils.toArray(".js-lace").forEach(function (el) {
      gsap.from(el, {
        scale: 0.96,
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "center center",
        scrollTrigger: { trigger: el, start: "top 85%" }
      });
    });
  }
})();

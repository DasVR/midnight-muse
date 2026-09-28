(function () {
  var marks = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮"];
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
  var nav = document.getElementById("site-nav");
  var currentSession = "portraits";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  function updateNav() {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

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
    currentSession = key;
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
        '<div class="tier-actions">' +
        '<button class="tier-book" type="button" data-tier="' + tier.num + '">Book ' + tier.name + "</button>" +
        '<button class="tier-dates" type="button" data-tier="' + tier.num + '">Dates</button>' +
        "</div></article>";
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
    if (typeof calendar !== "undefined") calendar.show(key, null);
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

  // "Book" on a tier card jumps to the form with shoot type and package filled in.
  function prefillBooking(program, tierNum, dateText) {
    shootType.value = program;
    fillPackages(program);
    packageField.value = tierNum;
    if (dateText) document.getElementById("dates").value = dateText;
    document.getElementById("book").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    document.getElementById("name").focus({ preventScroll: true });
  }

  scroller.addEventListener("click", function (event) {
    var book = event.target.closest(".tier-book");
    var dates = event.target.closest(".tier-dates");
    if (book) prefillBooking(currentSession, book.getAttribute("data-tier"));
    if (dates) {
      calendar.show(currentSession, dates.getAttribute("data-tier"));
      document.getElementById("availability").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }
  });

  // Shop and doll house buttons have no checkout behind them yet.
  document.querySelectorAll("#shop .tier-book, #doll-houses .tier-book").forEach(function (el) {
    el.addEventListener("click", function () {
      var section = el.closest("section");
      var note = section.querySelector(".checkout-note");
      if (!note) {
        note = document.createElement("p");
        note.className = "form-status checkout-note";
        note.setAttribute("role", "status");
        note.textContent = "This is a wireframe: checkout isn't built yet.";
        section.querySelector(".wrap").appendChild(note);
      }
    });
  });

  // Availability calendar. Dates are generated, not real: in production this
  // reads Dani's booking calendar.
  var calendar = (function () {
    var programSelect = document.getElementById("cal-program");
    var tierBox = document.getElementById("cal-tiers");
    var daysBox = document.getElementById("cal-days");
    var monthLabel = document.getElementById("cal-month");
    var detail = document.getElementById("cal-detail");
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var state = { program: "portraits", tier: null, month: new Date(today.getFullYear(), today.getMonth(), 1), selected: null };
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Show next month straight away when this one is nearly over.
    if (new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() - today.getDate() < 7) {
      state.month = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    }

    function seeded(date, salt) {
      var n = date.getFullYear() * 372 + date.getMonth() * 31 + date.getDate() + salt * 977;
      n = Math.sin(n) * 10000;
      return n - Math.floor(n);
    }

    // Which tier numerals are open on a date for a program.
    function openTiers(date, program) {
      var tiers = sessions[program].tiers;
      var dow = date.getDay();
      if (date < today || dow === 0 || dow === 1) return [];
      var salt = Object.keys(sessions).indexOf(program) + 1;
      return tiers.filter(function (tier, i) {
        var last = i === tiers.length - 1;
        if (dow === 6 && i > 1) return false;        // Saturdays are mini days
        if (last && dow !== 4 && dow !== 5) return false; // the top tier needs a full set build: Thu/Fri
        return seeded(date, salt + i) > 0.38;         // some slots already booked
      }).map(function (tier) { return tier.num; });
    }

    function tierByNum(num) {
      return sessions[state.program].tiers.filter(function (t) { return t.num === num; })[0];
    }

    function renderTierChips() {
      var chips = [{ num: null, label: "All tiers" }].concat(sessions[state.program].tiers.map(function (t) {
        return { num: t.num, label: t.num + " " + t.name };
      }));
      tierBox.innerHTML = chips.map(function (c) {
        return '<button type="button" class="chip" data-tier="' + (c.num || "") + '" aria-pressed="' + (state.tier === c.num) + '">' + c.label + "</button>";
      }).join("");
    }

    function renderDays() {
      var year = state.month.getFullYear();
      var month = state.month.getMonth();
      var count = new Date(year, month + 1, 0).getDate();
      var tiers = sessions[state.program].tiers;
      var html = "";
      monthLabel.textContent = monthNames[month] + " " + year;
      for (var b = 0; b < state.month.getDay(); b += 1) html += '<span class="cal-blank"></span>';
      for (var d = 1; d <= count; d += 1) {
        var date = new Date(year, month, d);
        var open = openTiers(date, state.program);
        var usable = state.tier ? open.indexOf(state.tier) > -1 : open.length > 0;
        var pips = tiers.map(function (t) {
          var cls = "pip" + (open.indexOf(t.num) > -1 ? " on" : "") + (state.tier === t.num ? " focus" : "");
          return '<span class="' + cls + '"></span>';
        }).join("");
        var label = dayNames[date.getDay()] + " " + monthNames[month] + " " + d + ": " +
          (open.length ? "open tiers " + open.join(", ") : "nothing open");
        var selected = state.selected && state.selected.getTime() === date.getTime();
        html += '<button type="button" class="cal-day' + (selected ? " is-selected" : "") + '" data-day="' + d + '"' +
          (usable ? "" : " disabled") + ' aria-label="' + label + '"' + (selected ? ' aria-pressed="true"' : "") + ">" +
          '<span class="cal-num">' + d + '</span><span class="pips" aria-hidden="true">' + pips + "</span></button>";
      }
      daysBox.innerHTML = html;
      document.getElementById("cal-prev").disabled =
        year === today.getFullYear() && month <= today.getMonth();
    }

    function renderDetail() {
      if (!state.selected) {
        var anyOpen = daysBox.querySelector(".cal-day:not([disabled])");
        var what = state.tier ? state.tier + " " + tierByNum(state.tier).name : "any tier";
        detail.innerHTML = anyOpen
          ? '<p class="cal-detail-empty">Pick a date to see which sessions are open.</p>'
          : '<p class="cal-detail-empty">No open dates for ' + what + " in " + monthNames[state.month.getMonth()] +
            '. Try next month, or <a href="#book">write to Dani</a> for a custom date.</p>';
        return;
      }
      var date = state.selected;
      var dateText = dayNames[date.getDay()].slice(0, 3) + ", " + monthNames[date.getMonth()].slice(0, 3) + " " + date.getDate() + ", " + date.getFullYear();
      var open = openTiers(date, state.program).filter(function (num) { return !state.tier || num === state.tier; });
      detail.innerHTML = '<p class="cal-detail-date">' + dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate() + "</p>" +
        '<ul class="cal-open">' + open.map(function (num) {
          var t = tierByNum(num);
          return '<li><span class="cal-open-name">' + t.num + " " + t.name + '</span><span class="cal-open-price">' + t.price + "</span>" +
            '<button type="button" class="tier-book" data-tier="' + t.num + '" data-date="' + dateText + '">Book this date</button></li>';
        }).join("") + "</ul>";
    }

    function render() {
      renderTierChips();
      renderDays();
      renderDetail();
    }

    function show(program, tier) {
      state.program = program;
      state.tier = tier && sessions[program].tiers.some(function (t) { return t.num === tier; }) ? tier : null;
      programSelect.value = program;
      if (state.selected && openTiers(state.selected, program).indexOf(state.tier) < 0 && state.tier) state.selected = null;
      render();
    }

    programSelect.addEventListener("change", function () {
      state.selected = null;
      show(programSelect.value, null);
    });

    tierBox.addEventListener("click", function (event) {
      var chip = event.target.closest(".chip");
      if (!chip) return;
      show(state.program, chip.getAttribute("data-tier") || null);
    });

    daysBox.addEventListener("click", function (event) {
      var day = event.target.closest(".cal-day");
      if (!day || day.disabled) return;
      state.selected = new Date(state.month.getFullYear(), state.month.getMonth(), Number(day.getAttribute("data-day")));
      renderDays();
      renderDetail();
      // On phones the detail panel sits under the calendar; bring it into view.
      if (detail.getBoundingClientRect().top > window.innerHeight - 120) {
        detail.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
      }
    });

    detail.addEventListener("click", function (event) {
      var book = event.target.closest(".tier-book");
      if (book) prefillBooking(state.program, book.getAttribute("data-tier"), book.getAttribute("data-date"));
    });

    function shiftMonth(delta) {
      state.month = new Date(state.month.getFullYear(), state.month.getMonth() + delta, 1);
      state.selected = null;
      renderDays();
      renderDetail();
    }
    document.getElementById("cal-prev").addEventListener("click", function () { shiftMonth(-1); });
    document.getElementById("cal-next").addEventListener("click", function () { shiftMonth(1); });

    // Program and tier pages can link here, e.g. ?program=couples&tier=III#availability
    var params = new URLSearchParams(window.location.search);
    var linkedProgram = sessions[params.get("program")] ? params.get("program") : "portraits";
    show(linkedProgram, params.get("tier"));

    return { show: show };
  })();

  shootType.addEventListener("change", function () {
    fillPackages(shootType.value);
  });

  renderTiers("portraits");
  fillPackages("portraits");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.hidden = false;
  });

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

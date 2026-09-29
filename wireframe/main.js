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
  var tierTable = document.getElementById("tier-table");
  var sessionPanel = document.getElementById("session-panel");
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
        { num: "III", name: "Styled", price: "$250", perk: "+ outfit options", rows: [["Session", "1 hr"], ["Edited photos", "20+"], ["Locations", "1–2"], ["Travel", "35 min"]] },
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

  var menuAnim = null;

  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    if (menuAnim) menuAnim.cancel();
    if (open) {
      overlay.hidden = false;
      var close = overlay.querySelector("button, a");
      if (close) close.focus();
      if (reduce) return;
      var r = menuBtn.getBoundingClientRect();
      var x = r.left + r.width / 2;
      var y = r.top + r.height / 2;
      var radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      menuAnim = overlay.animate([
        { clipPath: "circle(0px at " + x + "px " + y + "px)" },
        { clipPath: "circle(" + radius + "px at " + x + "px " + y + "px)" }
      ], { duration: 350, easing: "cubic-bezier(0.32, 0.72, 0, 1)" });
      overlay.querySelectorAll("a").forEach(function (link, i) {
        link.animate([
          { opacity: 0, transform: "translateY(8px)" },
          { opacity: 1, transform: "translateY(0)" }
        ], { duration: 220, delay: 80 + i * 25, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
      });
    } else {
      if (reduce || overlay.hidden) {
        overlay.hidden = true;
        return;
      }
      var closing = overlay.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150, easing: "ease-out" });
      menuAnim = closing;
      closing.onfinish = function () { overlay.hidden = true; };
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
      var perk = tier.perk ? '<p class="perk">' + tier.perk + "</p>" : "";
      return '<article class="tier frame">' + corners() +
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
    renderTable(session);
  }

  // Desktop reads the packages side by side, like a spec sheet.
  function renderTable(session) {
    var labels = [];
    session.tiers.forEach(function (tier) {
      tier.rows.forEach(function (row) { if (labels.indexOf(row[0]) < 0) labels.push(row[0]); });
    });
    var head = session.tiers.map(function (t) {
      return '<th scope="col"><span class="tier-num">' + t.num + '</span><span class="tier-name">' + t.name + '</span><span class="price">' + t.price + "</span></th>";
    }).join("");
    var body = labels.map(function (label) {
      return '<tr><th scope="row">' + label + "</th>" + session.tiers.map(function (t) {
        var row = t.rows.filter(function (r) { return r[0] === label; })[0];
        return row ? "<td>" + row[1] + "</td>" : '<td class="none"><span aria-hidden="true">·</span><span class="sr-only">Not listed</span></td>';
      }).join("") + "</tr>";
    }).join("");
    var extras = '<tr><th scope="row">Extras</th>' + session.tiers.map(function (t) {
      return t.perk ? "<td>" + t.perk.replace(/^\+\s*/, "") + "</td>" : '<td class="none"><span aria-hidden="true">·</span><span class="sr-only">None</span></td>';
    }).join("") + "</tr>";
    var actions = '<tr class="tier-table-actions"><th scope="row"><span class="sr-only">Actions</span></th>' + session.tiers.map(function (t) {
      return '<td><button class="tier-book" type="button" data-tier="' + t.num + '">Book ' + t.name + '</button><button class="tier-dates" type="button" data-tier="' + t.num + '">Dates</button></td>';
    }).join("") + "</tr>";
    tierTable.innerHTML = corners() + '<table class="tier-table"><caption class="sr-only">Packages compared</caption><thead><tr><td></td>' + head + "</tr></thead><tbody>" + body + extras + actions + "</tbody></table>";
  }

  function fillPackages(key) {
    var previous = packageField.value;
    packageField.innerHTML = "";
    sessions[key].tiers.forEach(function (tier) {
      var option = document.createElement("option");
      option.value = tier.num;
      option.textContent = tier.num + " " + tier.name + " · " + tier.price;
      packageField.appendChild(option);
    });
    if (previous) packageField.value = previous;
    if (packageField.selectedIndex < 0) packageField.selectedIndex = 0;
  }

  var tabInk = document.querySelector(".tab-ink");
  var tabIndex = 0;

  function placeInk() {
    var selected = tabs.filter(function (t) { return t.getAttribute("aria-selected") === "true"; })[0];
    tabInk.style.transform = "translate(" + selected.offsetLeft + "px, " + (selected.offsetTop + selected.offsetHeight - 10) + "px) scaleX(" + selected.offsetWidth + ")";
  }

  function selectTab(tab) {
    var key = tab.getAttribute("data-session");
    var newIndex = tabs.indexOf(tab);
    var direction = newIndex >= tabIndex ? 1 : -1;
    var changed = newIndex !== tabIndex;
    tabIndex = newIndex;
    tabs.forEach(function (item) {
      var selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    document.getElementById("session-panel").setAttribute("aria-labelledby", tab.id);
    renderTiers(key);
    placeInk();
    if (changed && !reduce) {
      [tierTable, scroller].forEach(function (el) {
        el.animate([
          { opacity: 0, transform: "translateX(" + direction * 8 + "px)" },
          { opacity: 1, transform: "translateX(0)" }
        ], { duration: 200, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
      });
    }
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
  var datesField = document.getElementById("dates");
  var WRITE = { duration: 620, easing: "cubic-bezier(0.37, 0, 0.2, 1)" };

  function inkFor(field) {
    var wrap = field.closest(".field");
    if (!wrap.querySelector(".ink")) {
      wrap.insertAdjacentHTML("beforeend", '<span class="ink" aria-hidden="true"></span><span class="nib" aria-hidden="true"></span>');
    }
    return wrap;
  }

  function stopWriting(field) {
    var wrap = inkFor(field);
    [field, wrap.querySelector(".ink"), wrap.querySelector(".nib")].forEach(function (el) {
      el.getAnimations().forEach(function (a) { a.cancel(); });
    });
    field.style.clipPath = "";
  }

  // Wait until the smooth scroll has settled so the writing happens in view.
  function afterScroll(done) {
    var last = -1;
    var still = 0;
    var started = performance.now();
    (function tick() {
      var y = window.scrollY;
      still = Math.abs(y - last) < 1 ? still + 1 : 0;
      last = y;
      if (still > 4 || performance.now() - started > 1600) done();
      else requestAnimationFrame(tick);
    })();
  }

  function writeFields(fields) {
    fields.forEach(function (field) {
      stopWriting(field);
      var wrap = inkFor(field);
      wrap.classList.add("is-inked");
      if (!reduce) field.style.clipPath = "inset(0 100% 0 0)";
    });
    if (reduce) return;
    afterScroll(function () {
      fields.forEach(function (field, i) {
        var wrap = field.closest(".field");
        var width = field.offsetWidth;
        var timing = { duration: WRITE.duration, easing: WRITE.easing, delay: i * 320, fill: "backwards" };
        field.style.clipPath = "";
        field.animate([{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)" }], timing);
        wrap.querySelector(".ink").animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], timing);
        wrap.querySelector(".nib").animate([
          { transform: "translateX(0)", opacity: 0 },
          { transform: "translateX(" + width * 0.08 + "px)", opacity: 1, offset: 0.08 },
          { transform: "translateX(" + width * 0.94 + "px)", opacity: 1, offset: 0.92 },
          { transform: "translateX(" + width + "px)", opacity: 0 }
        ], { duration: WRITE.duration, easing: WRITE.easing, delay: i * 320, fill: "backwards" });
      });
    });
  }

  // Editing a written-in field by hand takes the ink off it.
  [shootType, packageField, datesField].forEach(function (field) {
    field.addEventListener("change", function () { field.closest(".field").classList.remove("is-inked"); });
    field.addEventListener("input", function () { field.closest(".field").classList.remove("is-inked"); });
  });

  function prefillBooking(program, tierNum, dateText) {
    shootType.value = program;
    fillPackages(program);
    packageField.value = tierNum;
    var written = [shootType, packageField];
    if (dateText) {
      datesField.value = dateText;
      written.push(datesField);
    }
    // Land with the fields being written in the middle of the screen.
    packageField.closest(".field").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    // Focus the form itself: keyboard users land there, and phones don't pop the keyboard mid-animation.
    form.focus({ preventScroll: true });
    writeFields(written);
  }

  sessionPanel.addEventListener("click", function (event) {
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
          '<span class="cal-num">' + d + '</span><span class="pips" aria-hidden="true">' + pips + "</span>" +
          '<span class="cal-count" aria-hidden="true">' + (usable ? (state.tier ? "1" : String(open.length)) : "") + "</span></button>";
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
      var dateText = dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
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
      if (reduce) return;
      // The new month arrives from the side of the arrow that was pressed.
      [daysBox, monthLabel].forEach(function (el) {
        el.getAnimations().forEach(function (a) { a.cancel(); });
        el.animate([
          { opacity: 0, transform: "translateX(" + delta * 24 + "px)" },
          { opacity: 1, transform: "translateX(0)" }
        ], { duration: 220, easing: "cubic-bezier(0.25, 1, 0.5, 1)" });
      });
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

  var sendBtn = form.querySelector(".send-btn");
  var sentTimer;
  form.setAttribute("tabindex", "-1");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendBtn.classList.add("is-sent");
    status.textContent = "Wireframe: nothing was actually sent.";
    clearTimeout(sentTimer);
    sentTimer = setTimeout(function () {
      sendBtn.classList.remove("is-sent");
      status.textContent = "";
    }, 3500);
  });

  // FAQ answers slide open and closed instead of snapping.
  document.querySelectorAll(".faq details").forEach(function (details) {
    var summary = details.querySelector("summary");
    var body = document.createElement("div");
    body.className = "faq-body";
    Array.prototype.slice.call(details.children).forEach(function (child) {
      if (child !== summary) body.appendChild(child);
    });
    details.appendChild(body);
    var running = null;
    summary.addEventListener("click", function (event) {
      if (reduce) return;
      event.preventDefault();
      // A closed <details> can still report its content's height in newer
      // Chrome, so a fully closed answer always opens from zero.
      var from = details.open ? body.getBoundingClientRect().height : 0;
      if (running) running.cancel();
      var opening = !details.open || details.classList.contains("is-closing");
      details.classList.remove("is-closing");
      if (opening) {
        details.open = true;
        running = body.animate([{ height: from + "px", opacity: from ? 1 : 0 }, { height: body.scrollHeight + "px", opacity: 1 }],
          { duration: 250, easing: "cubic-bezier(0.25, 1, 0.5, 1)" });
      } else {
        details.classList.add("is-closing");
        running = body.animate([{ height: from + "px", opacity: 1 }, { height: "0px", opacity: 0 }],
          { duration: 200, easing: "cubic-bezier(0.25, 1, 0.5, 1)" });
        running.onfinish = function () {
          details.open = false;
          details.classList.remove("is-closing");
        };
      }
      var anim = running;
      anim.addEventListener("finish", function () { if (running === anim) running = null; });
    });
  });

  if (!reduce && "IntersectionObserver" in window) {
    document.documentElement.classList.add("motion-ready");
    // Filigree strokes start at the centre diamond and ink outward.
    var filigree = document.querySelector(".filigree");
    if (filigree) {
      var center = 160;
      filigree.querySelectorAll("path").forEach(function (path) {
        var box = path.getBBox();
        var distance = Math.abs(box.x + box.width / 2 - center);
        path.style.setProperty("--draw-delay", Math.round(distance * 3) + "ms");
      });
    }
    var once = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-drawn");
        once.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll(".filigree, .doll-house").forEach(function (el) { once.observe(el); });
  }

  placeInk();
  requestAnimationFrame(function () { document.querySelector(".tabs").classList.add("ink-ready"); });
  window.addEventListener("resize", function () {
    var tabsEl = document.querySelector(".tabs");
    tabsEl.classList.remove("ink-ready");
    placeInk();
    requestAnimationFrame(function () { tabsEl.classList.add("ink-ready"); });
  });

})();

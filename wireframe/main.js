(function () {
  var menuBtn = document.getElementById("menu-toggle");
  var overlay = document.getElementById("nav-overlay");
  var form = document.getElementById("book-form");
  var status = document.getElementById("form-status");
  var shootType = document.getElementById("shoot-type");
  var packageField = document.getElementById("package");
  var scroller = document.getElementById("tier-scroller");
  var tierTable = document.getElementById("tier-table");
  var sessionPanel = document.getElementById("session-panel");
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
      // Maternity is booked as a couples session, so it lives here as a tier.
      tiers: blankTiers(5).concat([
        { num: "VI", name: "Maternity", price: "Confirm", perk: "+ shot like a couples session", rows: [["Session", "TBC"], ["Edited photos", "TBC"], ["Locations", "TBC"], ["Travel", "TBC"]] }
      ])
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
        rows: [["Session", "TBC"], ["Edited photos", "TBC"], ["Locations", "TBC"], ["Travel", "TBC"]]
      });
    }
    return tiers;
  }

  function updateNav() {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

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

  // The section opens on the price: the lowest tier, and what the range covers.
  function renderFrom(key, session) {
    var noun = { portraits: "Portrait", couples: "Couples", graduations: "Graduation", branding: "Branding" }[key] || "";
    var label = noun + " sessions from";
    var first = session.tiers[0];
    var last = session.tiers[session.tiers.length - 1];
    var row = function (tier, what) { return (tier.rows.filter(function (r) { return r[0] === what; })[0] || [])[1]; };
    document.getElementById("from-label").textContent = session.standIn ? noun + " sessions" : label;
    document.getElementById("from-price").textContent = session.standIn ? "Prices to come" : first.price;
    document.getElementById("from-price").classList.toggle("is-tbc", session.standIn);
    document.getElementById("from-range").textContent = session.standIn
      ? "Dani is finalising these packages"
      : row(first, "Session") + " to " + row(last, "Session") + " · " + String(row(first, "Edited photos")).split("–")[0] + " to " + row(last, "Edited photos") + " edited photos";
  }

  function renderTiers(key) {
    var session = sessions[key];
    currentSession = key;
    renderFrom(key, session);
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
        '<button class="tier-dates" type="button" data-tier="' + tier.num + '">See open dates</button>' +
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
      return '<td><button class="tier-book" type="button" data-tier="' + t.num + '">Book ' + t.name + '</button><button class="tier-dates" type="button" data-tier="' + t.num + '">See open dates</button></td>';
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

  // Days picked on the calendar are written into the letter's dates line.
  function writeDates(text) {
    datesField.value = text;
    datesField.closest(".field").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    form.focus({ preventScroll: true });
    writeFields([datesField]);
  }

  sessionPanel.addEventListener("click", function (event) {
    var book = event.target.closest(".tier-book");
    var dates = event.target.closest(".tier-dates");
    if (book) prefillBooking(currentSession, book.getAttribute("data-tier"));
    if (dates) {
      document.getElementById("availability").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }
  });

  // Links elsewhere on the page can open a session tab, e.g. the FAQ's "Couples".
  document.addEventListener("click", function (event) {
    var link = event.target.closest("[data-open-session]");
    if (!link) return;
    var tab = document.getElementById("tab-" + link.getAttribute("data-open-session"));
    if (tab) selectTab(tab);
  });

  // Open Dates: which days Dani is free, read from her Cal.com availability.
  // Nothing is booked here. Visitors tap the days that suit them and those
  // days are written into their letter; Dani confirms by writing back.
  var CAL = {
    user: "midnight-muse-jk6nt0",
    // Any event on her Cal.com works as the source: a day counts as open if
    // it has at least one free slot.
    event: "30min",
    api: "https://api.cal.com/v2/slots",
    monthsAhead: 6,
    maxPicks: 3
  };

  (function () {
    var daysBox = document.getElementById("cal-days");
    var monthLabel = document.getElementById("cal-month");
    var detail = document.getElementById("cal-detail");
    var prevBtn = document.getElementById("cal-prev");
    var nextBtn = document.getElementById("cal-next");
    var zone = (Intl.DateTimeFormat().resolvedOptions().timeZone) || "America/New_York";
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var firstMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastMonth = new Date(today.getFullYear(), today.getMonth() + CAL.monthsAhead, 1);
    var state = { month: firstMonth, picks: [] };
    var cache = {};
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function wait(ms) { return new Promise(function (done) { setTimeout(done, ms); }); }
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function key(date) { return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()); }
    function fromKey(day) {
      var p = day.split("-");
      return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    }
    function longDate(day) {
      var date = fromKey(day);
      return dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate();
    }

    // One request per month; the answer is the set of days with any free slot.
    function load(month) {
      var id = key(month);
      if (cache[id]) return cache[id];
      var start = month < today ? today : month;
      var end = new Date(month.getFullYear(), month.getMonth() + 1, 0);
      var url = CAL.api + "?" + new URLSearchParams({
        eventTypeSlug: CAL.event, username: CAL.user, start: key(start), end: key(end), timeZone: zone
      }).toString();
      function get() {
        return fetch(url, { headers: { "cal-api-version": "2024-09-04" } })
          .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); });
      }
      // One quiet retry before showing the fallback: phone networks drop requests.
      cache[id] = get()
        .catch(function () { return wait(900).then(get); })
        .then(function (body) {
          var open = {};
          Object.keys(body.data || {}).forEach(function (day) {
            if (body.data[day].length) open[day] = true;
          });
          return open;
        });
      cache[id].catch(function () { delete cache[id]; });
      return cache[id];
    }

    function renderDays(open) {
      var year = state.month.getFullYear();
      var month = state.month.getMonth();
      var count = new Date(year, month + 1, 0).getDate();
      var html = "";
      monthLabel.textContent = monthNames[month] + " " + year;
      for (var b = 0; b < state.month.getDay(); b += 1) html += '<span class="cal-blank"></span>';
      for (var d = 1; d <= count; d += 1) {
        var date = new Date(year, month, d);
        var day = key(date);
        var isOpen = Boolean(open && open[day]);
        var picked = state.picks.indexOf(day) > -1;
        var label = dayNames[date.getDay()] + " " + monthNames[month] + " " + d + (open ? (isOpen ? ", open" : ", not available") : "");
        html += '<button type="button" class="cal-day' + (isOpen ? " is-open" : "") + (picked ? " is-selected" : "") + '" data-day="' + day + '"' +
          (isOpen ? ' aria-pressed="' + picked + '"' : " disabled") + ' aria-label="' + label + '">' +
          '<span class="cal-num">' + d + "</span></button>";
      }
      daysBox.innerHTML = html;
      daysBox.setAttribute("aria-busy", String(!open));
      daysBox.classList.toggle("is-loading", !open);
      prevBtn.disabled = state.month <= firstMonth;
      nextBtn.disabled = state.month >= lastMonth;
    }

    function renderDetail(open) {
      // Picked days stay on screen while another month loads.
      if (!open && !state.picks.length) {
        detail.innerHTML = '<p class="cal-detail-empty">Loading Dani’s open dates…</p>';
        return;
      }
      var html = '<p class="cal-detail-kicker">Your letter</p>';
      if (!state.picks.length) {
        var anyOpen = Object.keys(open).length > 0;
        html += '<p class="cal-detail-empty">Tap the days that suit you, up to ' + CAL.maxPicks + ". They’ll go into your letter and Dani will write back to confirm.</p>";
        if (!anyOpen) {
          html += '<p class="cal-detail-empty">Nothing open in ' + monthNames[state.month.getMonth()] + ".</p>" +
            (state.month < lastMonth ? '<button type="button" class="btn btn-ghost cal-later">See ' + monthNames[(state.month.getMonth() + 1) % 12] + "</button>" : "");
        }
        html += '<a class="tier-dates cal-skip" href="#book">Or just write to Dani</a>';
        detail.innerHTML = html;
        return;
      }
      html += '<ul class="cal-picks">' + state.picks.map(function (day) {
        return '<li><span>' + longDate(day) + '</span><button type="button" class="cal-unpick" data-day="' + day + '" aria-label="Remove ' + longDate(day) + '">&times;</button></li>';
      }).join("") + "</ul>";
      if (state.picks.length >= CAL.maxPicks) html += '<p class="cal-detail-empty">That’s three. Remove one to swap it.</p>';
      html += '<button type="button" class="btn cal-write">Write your letter</button>';
      detail.innerHTML = html;
    }

    function failed() {
      daysBox.classList.remove("is-loading");
      detail.innerHTML = '<p class="cal-detail-empty">Dani’s calendar didn’t load.</p>' +
        '<button type="button" class="btn btn-ghost cal-retry">Try again</button>' +
        '<p class="cal-detail-empty">Or <a href="#book">write to her</a> with the days that suit you.</p>';
    }

    var ticket = 0;
    function render() {
      var mine = ++ticket;
      var month = state.month;
      var pending = load(month);
      var settled = false;
      pending.then(function () { settled = true; }, function () { settled = true; });
      // Only flash the loading state if the month isn't already cached.
      Promise.resolve().then(function () {
        if (settled || mine !== ticket) return;
        renderDays(null);
        renderDetail(null);
      });
      pending.then(function (open) {
        if (mine !== ticket) return;
        renderDays(open);
        renderDetail(open);
      }, function () {
        if (mine === ticket) failed();
      });
      // Warm the next month so the arrow feels instant.
      if (month < lastMonth) load(new Date(month.getFullYear(), month.getMonth() + 1, 1)).catch(function () {});
    }

    function toggle(day) {
      var at = state.picks.indexOf(day);
      if (at > -1) state.picks.splice(at, 1);
      else if (state.picks.length < CAL.maxPicks) state.picks.push(day);
      else return;
      state.picks.sort();
      render();
    }

    daysBox.addEventListener("click", function (event) {
      var day = event.target.closest(".cal-day");
      if (day && !day.disabled) toggle(day.getAttribute("data-day"));
    });

    detail.addEventListener("click", function (event) {
      var unpick = event.target.closest(".cal-unpick");
      if (unpick) toggle(unpick.getAttribute("data-day"));
      if (event.target.closest(".cal-later")) shiftMonth(1);
      if (event.target.closest(".cal-retry")) render();
      if (event.target.closest(".cal-write")) {
        writeDates(state.picks.map(longDate).join("; "));
      }
    });

    function shiftMonth(delta) {
      var next = new Date(state.month.getFullYear(), state.month.getMonth() + delta, 1);
      if (next < firstMonth || next > lastMonth) return;
      state.month = next;
      render();
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
    prevBtn.addEventListener("click", function () { shiftMonth(-1); });
    nextBtn.addEventListener("click", function () { shiftMonth(1); });

    render();

  })();

  shootType.addEventListener("change", function () {
    fillPackages(shootType.value);
  });

  renderTiers("portraits");
  fillPackages("portraits");

  form.setAttribute("tabindex", "-1");

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
    var once = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-drawn");
        once.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll(".doll-house").forEach(function (el) { once.observe(el); });
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

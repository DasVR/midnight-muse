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

  // Availability calendar, live from Dani's Cal.com. Open days and times come
  // from Cal.com's public slots API; reserving opens Cal.com's own booking
  // window on top of the page with the session, day and time already chosen.
  var CAL = {
    user: "midnight-muse-jk6nt0",
    // The Cal.com event every session books into until Dani adds one per
    // package. To give a package its own length, add an event on Cal.com and
    // map it here, e.g. "portraits:II": "portraits-basic".
    defaultEvent: "30min",
    events: {},
    api: "https://api.cal.com/v2/slots",
    monthsAhead: 6
  };

  var calendar = (function () {
    var programSelect = document.getElementById("cal-program");
    var tierBox = document.getElementById("cal-tiers");
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
    var state = { program: "portraits", tier: "I", month: firstMonth, day: null, slot: null };
    var cache = {};
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var timeFormat = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" });

    document.getElementById("cal-tz").textContent = zone === "UTC" ? "Times in UTC" : "Times in " + zone.replace(/_/g, " ").replace(/^.*\//, "") + " time";

    function wait(ms) { return new Promise(function (done) { setTimeout(done, ms); }); }
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function key(date) { return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()); }
    function eventSlug() { return CAL.events[state.program + ":" + state.tier] || CAL.events[state.program] || CAL.defaultEvent; }
    function tierByNum(num) {
      return sessions[state.program].tiers.filter(function (t) { return t.num === num; })[0];
    }
    function bookingUrl(slot) {
      var params = new URLSearchParams({ notes: packageNote() });
      if (slot) {
        params.set("month", slot.day.slice(0, 7));
        params.set("date", slot.day);
        params.set("slot", slot.iso);
      }
      return "https://cal.com/" + CAL.user + "/" + eventSlug() + "?" + params.toString();
    }
    function packageNote() {
      var t = tierByNum(state.tier);
      var program = programSelect.options[programSelect.selectedIndex].text;
      return program + " · " + t.num + " " + t.name + " (" + t.price + ")";
    }

    // One request per event and month; the answer is { "2026-10-05": [{ start }], ... }.
    function load(month) {
      var id = eventSlug() + "|" + key(month);
      if (cache[id]) return cache[id];
      var start = month < today ? today : month;
      var end = new Date(month.getFullYear(), month.getMonth() + 1, 0);
      var url = CAL.api + "?" + new URLSearchParams({
        eventTypeSlug: eventSlug(), username: CAL.user, start: key(start), end: key(end), timeZone: zone
      }).toString();
      function get() {
        return fetch(url, { headers: { "cal-api-version": "2024-09-04" } })
          .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); });
      }
      // One quiet retry before showing the fallback: phone networks drop requests.
      cache[id] = get()
        .catch(function () { return wait(900).then(get); })
        .then(function (body) {
          var days = {};
          Object.keys(body.data || {}).forEach(function (day) {
            days[day] = body.data[day].map(function (s) {
              var at = new Date(s.start);
              return { day: day, iso: at.toISOString(), at: at, label: timeFormat.format(at) };
            });
          });
          return days;
        });
      cache[id].catch(function () { delete cache[id]; });
      return cache[id];
    }

    function renderTierChips() {
      tierBox.innerHTML = sessions[state.program].tiers.map(function (t) {
        return '<button type="button" class="chip" data-tier="' + t.num + '" aria-pressed="' + (state.tier === t.num) + '">' +
          t.num + " " + t.name + "</button>";
      }).join("");
    }

    function renderDays(days) {
      var year = state.month.getFullYear();
      var month = state.month.getMonth();
      var count = new Date(year, month + 1, 0).getDate();
      var html = "";
      monthLabel.textContent = monthNames[month] + " " + year;
      for (var b = 0; b < state.month.getDay(); b += 1) html += '<span class="cal-blank"></span>';
      for (var d = 1; d <= count; d += 1) {
        var date = new Date(year, month, d);
        var slots = days ? days[key(date)] || [] : [];
        var open = slots.length > 0;
        var selected = state.day === key(date);
        var label = dayNames[date.getDay()] + " " + monthNames[month] + " " + d + (days ? (open ? ", " + slots.length + " open times" : ", nothing open") : "");
        html += '<button type="button" class="cal-day' + (open ? " is-open" : "") + (selected ? " is-selected" : "") + '" data-day="' + key(date) + '"' +
          (open ? "" : " disabled") + ' aria-label="' + label + '"' + (open ? ' aria-pressed="' + selected + '"' : "") + ">" +
          '<span class="cal-num">' + d + "</span></button>";
      }
      daysBox.innerHTML = html;
      daysBox.setAttribute("aria-busy", String(!days));
      daysBox.classList.toggle("is-loading", !days);
      prevBtn.disabled = state.month <= firstMonth;
      nextBtn.disabled = state.month >= lastMonth;
    }

    function firstOpen(days) {
      return Object.keys(days).sort().filter(function (day) { return days[day].length; })[0];
    }

    function longDate(day) {
      var p = day.split("-");
      var date = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
      return dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate();
    }

    function renderDetail(days) {
      if (!days) {
        detail.innerHTML = '<p class="cal-detail-empty">Loading Dani’s open dates…</p>';
        return;
      }
      if (!state.day || !days[state.day]) {
        var next = firstOpen(days);
        detail.innerHTML = next
          ? '<p class="cal-detail-kicker">Next opening</p><p class="cal-detail-date">' + longDate(next) + "</p>" +
            '<button type="button" class="btn btn-ghost cal-jump" data-day="' + next + '">See times</button>' +
            '<p class="cal-detail-empty">Or tap any open day on the calendar.</p>'
          : '<p class="cal-detail-empty">Nothing open in ' + monthNames[state.month.getMonth()] + ".</p>" +
            (state.month < lastMonth ? '<button type="button" class="btn btn-ghost cal-later">Try ' + monthNames[(state.month.getMonth() + 1) % 12] + "</button>" : "") +
            '<p class="cal-detail-empty">Or <a href="#book">write to Dani</a> for a custom date.</p>';
        return;
      }
      var slots = days[state.day];
      var groups = [["Morning", 0, 12], ["Afternoon", 12, 17], ["Evening", 17, 24]];
      var html = '<p class="cal-detail-kicker">' + packageNote() + '</p><p class="cal-detail-date">' + longDate(state.day) + "</p>";
      groups.forEach(function (g) {
        var list = slots.filter(function (s) { var h = s.at.getHours(); return h >= g[1] && h < g[2]; });
        if (!list.length) return;
        html += '<p class="cal-slot-label">' + g[0] + '</p><div class="cal-slots" role="group" aria-label="' + g[0] + ' times">' +
          list.map(function (s) {
            var on = state.slot && state.slot.iso === s.iso;
            return '<button type="button" class="cal-slot" data-iso="' + s.iso + '" aria-pressed="' + Boolean(on) + '">' + s.label + "</button>";
          }).join("") + "</div>";
      });
      html += '<div class="cal-confirm"' + (state.slot ? "" : " hidden") + ">" +
        '<button type="button" class="btn cal-reserve">Reserve ' + (state.slot ? state.slot.label : "") + ' <img class="key-icon" src="assets/key.svg" alt=""></button>' +
        '<button type="button" class="tier-dates cal-letter">Or send a letter instead</button></div>' +
        (state.slot ? "" : '<p class="cal-detail-empty cal-pick">Pick a time to reserve it.</p>');
      detail.innerHTML = html;
    }

    function failed() {
      daysBox.classList.remove("is-loading");
      detail.innerHTML = '<p class="cal-detail-empty">The live calendar didn’t load.</p>' +
        '<a class="btn btn-ghost" href="' + bookingUrl(null) + '" target="_blank" rel="noopener">Open Dani’s booking page</a>' +
        '<button type="button" class="tier-dates cal-retry">Try again</button>' +
        '<p class="cal-detail-empty">Or <a href="#book">write to Dani</a> and she’ll find a date with you.</p>';
    }

    var ticket = 0;
    function render() {
      var mine = ++ticket;
      var month = state.month;
      renderTierChips();
      var pending = load(month);
      var settled = false;
      pending.then(function () { settled = true; }, function () { settled = true; });
      // Only flash the loading state if the month isn't already cached.
      Promise.resolve().then(function () {
        if (settled || mine !== ticket) return;
        renderDays(null);
        renderDetail(null);
      });
      pending.then(function (days) {
        if (mine !== ticket) return;
        renderDays(days);
        renderDetail(days);
      }, function () {
        if (mine === ticket) failed();
      });
      // Warm the next month so the arrow feels instant.
      if (month < lastMonth) load(new Date(month.getFullYear(), month.getMonth() + 1, 1)).catch(function () {});
    }

    function show(program, tier) {
      state.program = program;
      var tiers = sessions[program].tiers;
      state.tier = tier && tiers.some(function (t) { return t.num === tier; }) ? tier : (tiers.some(function (t) { return t.num === state.tier; }) ? state.tier : tiers[0].num);
      programSelect.value = program;
      state.slot = null;
      render();
    }

    function pickDay(day) {
      state.day = day;
      state.slot = null;
      var p = day.split("-");
      var month = new Date(Number(p[0]), Number(p[1]) - 1, 1);
      if (month.getTime() !== state.month.getTime()) state.month = month;
      render();
      // On phones the times sit under the calendar; bring them into view.
      load(state.month).then(function () {
        requestAnimationFrame(function () {
          if (detail.getBoundingClientRect().top > window.innerHeight - 160) {
            detail.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
          }
        });
      }, function () {});
    }

    programSelect.addEventListener("change", function () {
      state.day = null;
      show(programSelect.value, null);
    });

    tierBox.addEventListener("click", function (event) {
      var chip = event.target.closest(".chip");
      if (!chip) return;
      show(state.program, chip.getAttribute("data-tier"));
    });

    daysBox.addEventListener("click", function (event) {
      var day = event.target.closest(".cal-day");
      if (day && !day.disabled) pickDay(day.getAttribute("data-day"));
    });

    detail.addEventListener("click", function (event) {
      var jump = event.target.closest(".cal-jump");
      var later = event.target.closest(".cal-later");
      var slotBtn = event.target.closest(".cal-slot");
      if (jump) pickDay(jump.getAttribute("data-day"));
      if (later) shiftMonth(1);
      if (event.target.closest(".cal-retry")) render();
      if (slotBtn) {
        load(state.month).then(function (days) {
          state.slot = days[state.day].filter(function (s) { return s.iso === slotBtn.getAttribute("data-iso"); })[0];
          renderDetail(days);
          var reserve = detail.querySelector(".cal-reserve");
          reserve.focus({ preventScroll: true });
          if (reserve.getBoundingClientRect().bottom > window.innerHeight - 24) {
            reserve.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
          }
        });
      }
      if (event.target.closest(".cal-reserve") && state.slot) reserve(state.slot);
      if (event.target.closest(".cal-letter") && state.slot) {
        prefillBooking(state.program, state.tier, longDate(state.day) + ", " + state.day.slice(0, 4) + " at " + state.slot.label);
      }
    });

    // Cal.com's embed loads on the first reservation, not with the page.
    function reserve(slot) {
      var url = bookingUrl(slot);
      var opened = false;
      function fallback() {
        if (opened) return;
        opened = true;
        window.open(url, "_blank", "noopener");
      }
      try {
        if (!window.Cal) {
          (function (C, A, L) {
            var p = function (a, ar) { a.q.push(ar); };
            var d = C.document;
            C.Cal = C.Cal || function () {
              var cal = C.Cal; var ar = arguments;
              if (!cal.loaded) {
                cal.ns = {}; cal.q = cal.q || [];
                var s = d.head.appendChild(d.createElement("script"));
                s.src = A;
                s.onerror = fallback;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                var api = function () { p(api, arguments); };
                var namespace = ar[1];
                api.q = api.q || [];
                if (typeof namespace === "string") {
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else p(cal, ar);
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");
          window.Cal("init", "muse", { origin: "https://cal.com" });
          window.Cal.ns.muse("ui", {
            theme: "dark",
            cssVarsPerTheme: { dark: { "cal-brand": "#F2EEE6" } },
            layout: "month_view"
          });
        }
        var params = new URL(url).searchParams;
        var config = { layout: "month_view", theme: "dark" };
        params.forEach(function (value, name) { config[name] = value; });
        window.Cal.ns.muse("modal", { calLink: CAL.user + "/" + eventSlug(), config: config });
        opened = true;
      } catch (err) {
        fallback();
      }
    }

    function shiftMonth(delta) {
      var next = new Date(state.month.getFullYear(), state.month.getMonth() + delta, 1);
      if (next < firstMonth || next > lastMonth) return;
      state.month = next;
      state.day = null;
      state.slot = null;
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

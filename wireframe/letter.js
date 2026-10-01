// Sending the booking form: the form becomes a letter that writes itself,
// folds in half, is enveloped from behind, stamped, and slides into a mail
// slot at the edge of the screen. Tap (or Escape) skips to the end.
(function () {
  var form = document.getElementById("book-form");
  var status = document.getElementById("form-status");
  if (!form) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canAnimate = typeof Element.prototype.animate === "function";
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var CRISP = "cubic-bezier(0.37, 0, 0.2, 1)";
  var ENTER = "cubic-bezier(0.22, 1, 0.36, 1)";
  var MOVE = "cubic-bezier(0.25, 1, 0.5, 1)";
  var FOLD = "cubic-bezier(0.65, 0, 0.35, 1)";

  var STAMP =
    '<svg viewBox="0 0 54 64" aria-hidden="true" focusable="false">' +
      '<rect x="3" y="3" width="48" height="58" fill="currentColor"/>' +
      // Perforations: dots in the envelope's colour punched along the edge.
      '<rect x="3" y="3" width="48" height="58" fill="none" style="stroke:var(--bone)" stroke-width="3.2" stroke-dasharray="0 5.2" stroke-linecap="round"/>' +
      '<rect x="9" y="9" width="36" height="46" fill="none" style="stroke:var(--ivory)" stroke-width="0.8" opacity="0.6"/>' +
      '<g fill="none" style="stroke:var(--ivory)" stroke-width="1.3" stroke-linecap="round">' +
        '<circle cx="27" cy="21" r="6"/><circle cx="27" cy="21" r="2.2"/>' +
        '<path d="M27 27v20M27 39h5M27 43h4M27 47h6"/>' +
      "</g>" +
    "</svg>";

  var POSTMARK =
    '<svg viewBox="0 0 90 60" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="1">' +
      '<circle cx="30" cy="30" r="21"/><circle cx="30" cy="30" r="16"/>' +
      '<path d="M54 20c6-4 12 4 18 0s12 4 18 0M54 30c6-4 12 4 18 0s12 4 18 0M54 40c6-4 12 4 18 0s12 4 18 0"/>' +
    "</g></svg>";

  function value(id) {
    var el = document.getElementById(id);
    if (!el) return "";
    if (el.tagName === "SELECT") return el.selectedIndex >= 0 ? el.options[el.selectedIndex].text : "";
    return el.value.trim();
  }

  // The letter reads like a note to Dani, built only from what was entered.
  function composeLetter() {
    var now = new Date();
    var pkg = value("package").replace(" · ", " (") + (value("package").indexOf(" · ") > -1 ? ")" : "");
    var nouns = { portraits: "portrait", couples: "couples", graduations: "graduation", branding: "branding" };
    var shoot = nouns[document.getElementById("shoot-type").value] || value("shoot-type").toLowerCase();
    var contact = [value("email"), value("phone"), value("instagram") ? "@" + value("instagram").replace(/^@/, "") : ""].filter(Boolean);
    var lines = [];
    lines.push("I'd love to book a " + shoot + " session, package " + pkg + ".");
    lines.push(value("dates") ? value("dates") + " would be perfect." : "I'm flexible on dates.");
    if (value("vision")) {
      var vision = value("vision");
      lines.push("My vision: " + (vision.length > 160 ? vision.slice(0, 157) + "..." : vision));
    }
    if (value("pinterest")) lines.push("My Pinterest board is linked below.");
    if (contact.length) {
      var last = contact.pop();
      lines.push("You can reach me at " + (contact.length ? contact.join(", ") + " or " : "") + last + ".");
    }
    if (value("hear")) lines.push("I found you through " + value("hear") + ".");
    return {
      date: now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear(),
      body: lines,
      name: value("name") || "A future muse"
    };
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // Break paragraphs into their rendered lines so each line can be written in turn.
  function splitLines(paragraph) {
    var words = paragraph.textContent.split(/\s+/);
    paragraph.textContent = "";
    var spans = words.map(function (word, i) {
      var span = el("span", "", word + (i < words.length - 1 ? " " : ""));
      paragraph.appendChild(span);
      return span;
    });
    var rows = [];
    spans.forEach(function (span) {
      var top = span.offsetTop;
      var row = rows[rows.length - 1];
      if (!row || Math.abs(row.top - top) > 2) rows.push(row = { top: top, text: "" });
      row.text += span.textContent;
    });
    paragraph.textContent = "";
    return rows.map(function (row) {
      var line = el("span", "letter-line", row.text.replace(/\s+$/, ""));
      paragraph.appendChild(line);
      return line;
    });
  }

  function slotDirection() {
    var forced = new URLSearchParams(window.location.search).get("slot");
    if (["left", "right", "up", "down"].indexOf(forced) > -1) return forced;
    return window.innerWidth < 700 ? "down" : "right";
  }

  function showSent(letter) {
    form.hidden = true;
    var note = el("div", "sent-note");
    note.setAttribute("tabindex", "-1");
    note.appendChild(el("h3", "sent-title", "Your letter is on its way"));
    note.appendChild(el("p", "sent-body", "Dani will write back to " + (value("email") || "you") + "."));
    note.appendChild(el("p", "form-status", "Wireframe: nothing was actually sent."));
    var again = el("button", "btn btn-ghost", "Write another letter");
    again.type = "button";
    again.addEventListener("click", function () {
      form.reset();
      form.querySelectorAll(".field.is-inked").forEach(function (f) { f.classList.remove("is-inked"); });
      document.getElementById("shoot-type").dispatchEvent(new Event("change"));
      note.remove();
      form.hidden = false;
      document.getElementById("name").focus();
    });
    note.appendChild(again);
    form.parentNode.insertBefore(note, form.nextSibling);
    status.textContent = "";
    if (!reduce && canAnimate) {
      note.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 320, easing: ENTER });
    }
    note.focus({ preventScroll: true });
    note.scrollIntoView({ block: "center" });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var letter = composeLetter();
    if (reduce || !canAnimate) {
      showSent(letter);
      return;
    }
    status.textContent = "Sending your letter.";
    mail(letter);
  });

  function mail(letter) {
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var skipping = false;

    // Letter size: portrait paper that fits the screen.
    var Lw = Math.min(520, vw - 48);
    var Lh = Math.round(Lw * 1.3);
    if (Lh > vh - 140) { Lh = vh - 140; Lw = Math.round(Lh / 1.3); }
    var envW = Lw + 28;
    var envH = Math.round(Lh / 2) + 30;

    var layer = el("div", "mail-layer");
    layer.setAttribute("aria-hidden", "true");
    var flight = el("div", "mail-flight");
    var center = el("div", "mail-center");
    center.style.width = Lw + "px";
    center.style.height = Lh + "px";
    center.style.left = Math.round((vw - Lw) / 2) + "px";
    center.style.top = Math.round((vh - Lh) / 2) + "px";
    center.style.setProperty("--env-w", envW + "px");
    center.style.setProperty("--env-h", envH + "px");
    center.style.setProperty("--lh", Lh + "px");

    // Envelope back, pocket and flap sit around where the folded letter will be.
    var back = el("div", "env-back");
    var pocket = el("div", "env-pocket");
    pocket.innerHTML = '<svg viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 50 34 100 0v70H0Z" vector-effect="non-scaling-stroke"/></svg>';
    var flap = el("div", "env-flap");
    flap.innerHTML = '<svg viewBox="0 0 100 56" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0h100L50 56Z" vector-effect="non-scaling-stroke"/></svg>';
    var stamp = el("div", "env-stamp");
    stamp.innerHTML = STAMP;
    var postmark = el("div", "env-postmark");
    postmark.innerHTML = POSTMARK;

    // The letter itself.
    var sheet = el("div", "letter-sheet");
    var head = el("div", "letter-head");
    var mark = el("img", "letter-key");
    mark.src = "assets/key.svg";
    mark.alt = "";
    head.appendChild(mark);
    head.appendChild(el("span", "letter-date", letter.date));
    sheet.appendChild(head);
    var greeting = el("p", "letter-greeting", "Dear Dani,");
    sheet.appendChild(greeting);
    var paragraphs = letter.body.map(function (text) {
      var p = el("p", "letter-body", text);
      sheet.appendChild(p);
      return p;
    });
    sheet.appendChild(el("p", "letter-closing", "Yours,"));
    var signature = el("p", "letter-signature", letter.name);
    sheet.appendChild(signature);

    [back, sheet, pocket, flap, stamp, postmark].forEach(function (node) { center.appendChild(node); });
    flight.appendChild(center);
    layer.appendChild(flight);
    var skipHint = el("p", "mail-skip", "Tap to skip");
    layer.appendChild(skipHint);
    document.body.appendChild(layer);

    var slot = el("div", "mail-slot");
    slot.setAttribute("aria-hidden", "true");
    var backdrop = el("div", "mail-backdrop");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.insertBefore(backdrop, layer);

    function play(node, frames, options) {
      var anim = node.animate(frames, Object.assign({ fill: "forwards" }, options));
      if (skipping) anim.finish();
      return anim.finished;
    }

    function wait(ms) {
      if (skipping) return Promise.resolve();
      return new Promise(function (resolve) { setTimeout(resolve, ms); });
    }

    function skip() {
      if (skipping) return;
      skipping = true;
      document.getAnimations().forEach(function (anim) {
        var target = anim.effect && anim.effect.target;
        if (target && (layer.contains(target) || target === slot || target === form || target === backdrop)) anim.finish();
      });
    }
    layer.addEventListener("click", skip);
    function onKey(event) { if (event.key === "Escape") skip(); }
    document.addEventListener("keydown", onKey);

    // Every line of the letter, in reading order, ready to be written.
    var lines = [head, greeting]
      .concat(paragraphs.reduce(function (all, p) { return all.concat(splitLines(p)); }, []))
      .concat([sheet.querySelector(".letter-closing"), signature]);

    // 1. The form's own area turns into the letter.
    var from = form.getBoundingClientRect();
    var to = { left: (vw - Lw) / 2, top: (vh - Lh) / 2 };
    var sx = from.width / Lw;
    var sy = from.height / Lh;
    var start = "translate(" + (from.left - to.left) + "px, " + (from.top - to.top) + "px) scale(" + sx + ", " + sy + ")";
    lines.forEach(function (line) { line.style.clipPath = "inset(0 100% 0 0)"; });

    play(backdrop, [{ opacity: 0 }, { opacity: 0.72 }], { duration: 320, easing: "ease-out" });
    play(form, [{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: "ease-out" });
    play(sheet, [
      { transform: start, backgroundColor: "rgba(242, 238, 230, 0)" },
      { transform: "none", backgroundColor: "rgba(242, 238, 230, 1)" }
    ], { duration: 560, easing: ENTER })
      // 2. Write the letter, one crisp line after another.
      .then(function () {
        var delay = 0;
        var all = lines.map(function (line) {
          var length = line.textContent.length;
          var duration = Math.max(180, Math.min(380, length * 8));
          var anim = play(line, [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)" }],
            { duration: duration, delay: delay, easing: CRISP });
          delay += duration * 0.45 + 20;
          return anim;
        });
        return Promise.all(all);
      })
      .then(function () { return wait(180); })
      // 3. Fold the bottom half up over the top half.
      .then(function () {
        var fold = el("div", "letter-fold");
        var top = el("div", "fold-half fold-top");
        var bottom = el("div", "fold-half fold-bottom");
        var front = el("div", "fold-face fold-front");
        var backFace = el("div", "fold-face fold-back");
        var shade = el("div", "fold-shade");
        top.appendChild(sheet.cloneNode(true));
        front.appendChild(sheet.cloneNode(true));
        front.appendChild(shade);
        bottom.appendChild(front);
        bottom.appendChild(backFace);
        fold.appendChild(top);
        fold.appendChild(bottom);
        center.insertBefore(fold, sheet);
        fold.querySelectorAll(".letter-line, .letter-head, .letter-greeting, .letter-closing, .letter-signature").forEach(function (n) { n.style.clipPath = ""; });
        sheet.remove();
        play(shade, [{ opacity: 0 }, { opacity: 0.35, offset: 0.5 }, { opacity: 0 }], { duration: 600, easing: FOLD });
        // Keep the folded letter centred on screen while it folds.
        play(center, [{ transform: "translateY(0)" }, { transform: "translateY(" + Lh / 4 + "px)" }], { duration: 600, easing: FOLD });
        return play(bottom, [{ transform: "rotateX(0deg)" }, { transform: "rotateX(180deg)" }], { duration: 600, easing: FOLD });
      })
      // 4. The envelope comes up from behind and wraps the letter.
      .then(function () {
        play(back, [
          { opacity: 0, transform: "translateY(26px) scale(0.94)" },
          { opacity: 1, transform: "none" }
        ], { duration: 380, easing: ENTER });
        return play(pocket, [
          { opacity: 0, transform: "translateY(34px)" },
          { opacity: 1, transform: "none" }
        ], { duration: 420, delay: 140, easing: ENTER });
      })
      .then(function () {
        play(flap, [{ opacity: 0 }, { opacity: 1 }], { duration: 80 });
        return play(flap, [{ transform: "rotateX(180deg)" }, { transform: "rotateX(0deg)" }], { duration: 380, easing: FOLD });
      })
      // 5. Stamp it.
      .then(function () {
        play(postmark, [{ opacity: 0 }, { opacity: 0.55 }], { duration: 260, delay: 160 });
        play(center, [
          { transform: "translateY(" + Lh / 4 + "px)" },
          { transform: "translateY(" + (Lh / 4 + 2) + "px)", offset: 0.4 },
          { transform: "translateY(" + Lh / 4 + "px)" }
        ], { duration: 160, delay: 180 });
        return play(stamp, [
          { opacity: 0, transform: "scale(1.7) rotate(-16deg)" },
          { opacity: 1, transform: "scale(1) rotate(-4deg)" }
        ], { duration: 260, easing: "cubic-bezier(0.34, 1.4, 0.64, 1)" });
      })
      .then(function () { return wait(220); })
      // 6. Into the mail slot at the edge of the screen.
      .then(function () {
        var direction = slotDirection();
        var box = back.getBoundingClientRect();
        var ex = box.left + box.width / 2;
        var ey = box.top + box.height / 2;
        var vertical = direction === "left" || direction === "right";
        var slotLength = vertical ? Math.min(170, vh * 0.3) : Math.min(230, vw * 0.6);
        var scale = (slotLength * 0.8) / envW;
        var rotate = direction === "right" ? 90 : direction === "left" ? -90 : 0;
        // After turning to face the slot, the envelope's short side leads the way in.
        var across = envH * scale;
        var slotX = direction === "right" ? vw - 22 : direction === "left" ? 22 : vw / 2;
        var bannerBottom = (document.querySelector(".draft-banner:not([hidden])") || { getBoundingClientRect: function () { return { bottom: 0 }; } }).getBoundingClientRect().bottom;
        var slotY = direction === "down" ? vh - 22 : direction === "up" ? Math.max(22, bannerBottom + 22) : vh / 2;
        var sign = direction === "right" || direction === "down" ? 1 : -1;

        slot.className = "mail-slot mail-slot-" + (vertical ? "v" : "h");
        slot.style.left = slotX + "px";
        slot.style.top = slotY + "px";
        slot.style.setProperty("--slot-length", slotLength + "px");
        document.body.appendChild(slot);
        play(skipHint, [{ opacity: 1 }, { opacity: 0 }], { duration: 160 });
        play(slot, [{ opacity: 0, transform: "translate(-50%, -50%) scale(0.6)" }, { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }],
          { duration: 240, easing: ENTER });

        function at(x, y) {
          return "translate(" + (x - ex) + "px, " + (y - ey) + "px) rotate(" + rotate + "deg) scale(" + scale + ")";
        }
        var near = vertical
          ? at(slotX - sign * (across / 2 + 16), slotY)
          : at(slotX, slotY - sign * (across / 2 + 16));
        var through = vertical
          ? at(slotX + sign * (across / 2 + 8), slotY)
          : at(slotX, slotY + sign * (across / 2 + 8));

        flight.style.transformOrigin = ex + "px " + ey + "px";
        return play(flight, [{ transform: "none" }, { transform: near }], { duration: 560, easing: MOVE })
          .then(function () {
            // Everything past the slot line disappears into the slot.
            layer.style.clipPath = direction === "right" ? "inset(0 " + (vw - slotX) + "px 0 0)"
              : direction === "left" ? "inset(0 0 0 " + slotX + "px)"
              : direction === "down" ? "inset(0 0 " + (vh - slotY) + "px 0)"
              : "inset(" + slotY + "px 0 0 0)";
            return play(flight, [{ transform: near }, { transform: through }], { duration: 320, easing: "cubic-bezier(0.5, 0, 0.75, 0)" });
          })
          .then(function () {
            // The slot swallows it.
            return play(slot, [
              { transform: "translate(-50%, -50%) scale(1)" },
              { transform: "translate(-50%, -50%) scale(1.08)", offset: 0.4 },
              { transform: "translate(-50%, -50%) scale(1)" }
            ], { duration: 180 });
          });
      })
      .then(finish, finish);

    var done = false;
    function finish() {
      if (done) return;
      done = true;
      document.removeEventListener("keydown", onKey);
      layer.remove();
      form.getAnimations().forEach(function (anim) { anim.cancel(); });
      showSent(letter);
      // The dimming and the slot fade away over the confirmation.
      [backdrop, slot].forEach(function (node) {
        if (!node.isConnected) return;
        var from = getComputedStyle(node).opacity;
        node.getAnimations().forEach(function (anim) { anim.cancel(); });
        var out = node.animate([{ opacity: from }, { opacity: 0 }], { duration: skipping ? 120 : 320, easing: "ease-out", fill: "forwards" });
        out.onfinish = function () { node.remove(); };
      });
    }
  }
})();

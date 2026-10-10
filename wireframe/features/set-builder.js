// Feature: Set builder. Delete this file, features/set-builder.css and the
// lines marked "feature:set-builder" in index.html to remove it.
//
// Under the Doll Houses, visitors pick a room, a light and up to two props.
// The choices become a sentence in the letter's "Your vision" box and a
// suggested Portraits package, so nobody has to face that box blank.
(function () {
  var mount = document.getElementById("set-builder");
  var vision = document.getElementById("vision");
  var shootType = document.getElementById("shoot-type");
  var packageField = document.getElementById("package");
  if (!mount || !vision || !shootType || !packageField) return;

  // Rooms and props come from sets Dani has already built (The Sets and the
  // Doll Houses), so nothing here promises a set she hasn't made.
  var groups = [
    { key: "room", label: "The room", max: 1, options: [
      ["location", "Somewhere real, on location"],
      ["velvet", "Red velvet and a candelabra"],
      ["tea", "A candlelit tea table"],
      ["mirror", "An ornate mirror"],
      ["dollhouse", "A dollhouse in a garden"],
      ["laundromat", "A laundromat"],
      ["rock", "A rock room"],
      ["blue", "A blue-lit room of cables"],
      ["sea", "Dark rocks by the sea"]
    ]},
    { key: "light", label: "The light", max: 1, options: [
      ["candle", "Candlelight"],
      ["flash", "Direct flash"],
      ["golden", "Golden hour"],
      ["spot", "A single spotlight"],
      ["colour", "Coloured light"]
    ]},
    { key: "props", label: "Up to two props", max: 2, options: [
      ["candles", "candles"],
      ["lace", "lace and veils"],
      ["books", "old books and teacups"],
      ["guitar", "a guitar"],
      ["mirrors", "mirrors"],
      ["flowers", "flowers"],
      ["skull", "a skull"],
      ["balloon", "a balloon"]
    ]}
  ];

  var picked = { room: [], light: [], props: [] };

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function labelFor(groupKey, value) {
    var group = groups.filter(function (g) { return g.key === groupKey; })[0];
    var opt = group.options.filter(function (o) { return o[0] === value; })[0];
    return opt ? opt[1] : "";
  }

  // A built room needs the backdrop (V Muse); props without a room need
  // curated props (IV Complete); otherwise styling options are enough (III).
  function suggestion() {
    var room = picked.room[0];
    if (room && room !== "location") return { num: "V", name: "Muse" };
    if (picked.props.length) return { num: "IV", name: "Complete" };
    return { num: "III", name: "Styled" };
  }

  function sentence() {
    var parts = [];
    if (picked.room.length) parts.push(labelFor("room", picked.room[0]));
    if (picked.light.length) parts.push("lit by " + labelFor("light", picked.light[0]).toLowerCase());
    if (picked.props.length) {
      parts.push("with " + picked.props.map(function (p) { return labelFor("props", p); }).join(" and "));
    }
    if (!parts.length) return "";
    var text = parts.join(", ");
    return "My set: " + text.charAt(0).toUpperCase() + text.slice(1) + ".";
  }

  var heading = el("h3", "sb-title", "Build your set");
  var lede = el("p", "sb-lede", "Pick a room, a light and a prop or two. It goes straight into your letter, and Dani builds from there.");
  mount.appendChild(heading);
  mount.appendChild(lede);

  groups.forEach(function (group) {
    var fieldset = el("fieldset", "sb-group");
    fieldset.appendChild(el("legend", "sb-legend", group.label));
    var row = el("div", "sb-chips");
    group.options.forEach(function (opt) {
      var chip = el("button", "chip", opt[1]);
      chip.type = "button";
      chip.setAttribute("aria-pressed", "false");
      chip.dataset.value = opt[0];
      chip.addEventListener("click", function () { toggle(group, opt[0]); });
      row.appendChild(chip);
    });
    fieldset.appendChild(row);
    mount.appendChild(fieldset);
  });

  var preview = el("p", "sb-preview");
  preview.setAttribute("aria-live", "polite");
  var suggest = el("p", "sb-suggest");
  var write = el("button", "btn btn-ghost sb-write", "Write it into my letter");
  write.type = "button";
  write.disabled = true;
  mount.appendChild(preview);
  mount.appendChild(suggest);
  mount.appendChild(write);

  function toggle(group, value) {
    var list = picked[group.key];
    var at = list.indexOf(value);
    if (at > -1) {
      list.splice(at, 1);
    } else {
      list.push(value);
      if (list.length > group.max) list.shift();
    }
    render();
  }

  function render() {
    mount.querySelectorAll(".sb-group").forEach(function (fieldset, i) {
      var list = picked[groups[i].key];
      fieldset.querySelectorAll(".chip").forEach(function (chip) {
        chip.setAttribute("aria-pressed", String(list.indexOf(chip.dataset.value) > -1));
      });
    });
    var text = sentence();
    preview.textContent = text || "Your set will be described here.";
    preview.classList.toggle("is-empty", !text);
    var tier = suggestion();
    suggest.textContent = text ? "Suggested: Portraits " + tier.num + " " + tier.name + ". You can change it in the letter." : "";
    write.disabled = !text;
  }

  write.addEventListener("click", function () {
    var text = sentence();
    if (!text) return;
    var tier = suggestion();
    // Let main.js rebuild the package list for Portraits, then pick the tier.
    shootType.value = "portraits";
    shootType.dispatchEvent(new Event("change", { bubbles: true }));
    packageField.value = tier.num;
    var rest = vision.value.replace(/^My set: [^\n]*\n*/, "");
    vision.value = text + (rest ? "\n\n" + rest : "");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    vision.closest(".field").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    vision.focus({ preventScroll: true });
  });

  render();
  mount.hidden = false;
})();

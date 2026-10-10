// Feature: Letters into sets. Delete this file, letters-to-sets.css,
// letters-to-sets.json and the lines marked "feature:letters-to-sets" in
// index.html to remove it.
//
// Shows a client's booking letter beside the set Dani built from it. Pairs
// come from features/letters-to-sets.json and are only added with the
// client's permission; until then one labelled placeholder holds the place.
(function () {
  var mount = document.getElementById("letters-to-sets");
  if (!mount || !window.fetch) return;

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function renderPair(pair) {
    var row = el("article", "lts-pair");
    var letter = el("div", "lts-letter letter-card");
    letter.appendChild(el("p", "lts-greeting", "Dear Dani,"));
    var quote = el("blockquote", "lts-words");
    quote.appendChild(el("p", "", pair.letter));
    letter.appendChild(quote);
    letter.appendChild(el("p", "sig", pair.client));
    if (pair.shoot) letter.appendChild(el("p", "shoot", pair.shoot));

    var set = el("div", "lts-set");
    (pair.photos || []).slice(0, 4).forEach(function (src, i) {
      var img = el("img");
      img.src = src;
      img.alt = (pair.alts && pair.alts[i]) || "";
      img.loading = "lazy";
      img.decoding = "async";
      set.appendChild(img);
    });

    row.appendChild(letter);
    row.appendChild(el("span", "lts-arrow", "became"));
    row.appendChild(set);
    return row;
  }

  function renderPlaceholder() {
    var row = el("article", "lts-pair lts-placeholder");
    var letter = el("div", "lts-letter lts-blank");
    letter.appendChild(el("p", "lts-greeting", "Dear Dani,"));
    letter.appendChild(el("p", "lts-blank-note", "A client's letter, in their own words"));
    var set = el("div", "lts-set lts-blank");
    set.appendChild(el("p", "lts-blank-note", "The set Dani built from it"));
    row.appendChild(letter);
    row.appendChild(el("span", "lts-arrow", "became"));
    row.appendChild(set);
    row.appendChild(el("p", "faq-draft lts-draft", "To come: pairs shared with each client's permission."));
    return row;
  }

  fetch("features/letters-to-sets.json")
    .then(function (res) { return res.ok ? res.json() : { pairs: [] }; })
    .catch(function () { return { pairs: [] }; })
    .then(function (data) {
      var pairs = (data && data.pairs) || [];
      mount.appendChild(el("h3", "lts-title", "From letter to set"));
      if (!pairs.length) {
        mount.appendChild(renderPlaceholder());
      } else {
        pairs.forEach(function (pair) { mount.appendChild(renderPair(pair)); });
      }
      mount.hidden = false;
    });
})();

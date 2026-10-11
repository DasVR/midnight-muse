// Feature: Blind Date series. Delete this file, blind-date-series.css,
// blind-date-episodes.json and the lines marked "feature:blind-date-series"
// in index.html to remove it.
//
// Every pair Dani matches becomes an episode with a sealed envelope:
// "Was there a second date?" Episodes come from blind-date-episodes.json;
// until the first one exists, a single sealed "coming soon" card holds
// the place.
(function () {
  var mount = document.getElementById("blind-date-series");
  if (!mount || !window.fetch) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function roman(n) {
    var map = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    var out = "";
    map.forEach(function (pair) { while (n >= pair[0]) { out += pair[1]; n -= pair[0]; } });
    return out;
  }

  function envelope(answer) {
    var wrap = el("div", "bd-envelope");
    var button = el("button", "bd-seal");
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.innerHTML =
      '<span class="bd-flap" aria-hidden="true"></span>' +
      '<span class="bd-wax" aria-hidden="true"></span>' +
      '<span class="bd-q">Was there a second date?</span>';
    var reveal = el("p", "bd-answer", answer || "Dani will tell you soon.");
    reveal.hidden = true;
    button.addEventListener("click", function () {
      if (wrap.classList.contains("is-open")) return;
      wrap.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      setTimeout(function () { reveal.hidden = false; }, reduce ? 0 : 420);
    });
    wrap.appendChild(button);
    wrap.appendChild(reveal);
    return wrap;
  }

  function renderEpisode(ep) {
    var card = el("article", "bd-episode");
    card.appendChild(el("p", "bd-num", "Episode " + roman(ep.episode || 1)));
    card.appendChild(el("h4", "bd-names", ep.names || ""));
    if (ep.where) card.appendChild(el("p", "bd-where", ep.where));
    var photos = el("div", "bd-photos");
    (ep.photos || []).slice(0, 3).forEach(function (src, i) {
      var img = el("img");
      img.src = src;
      img.alt = (ep.alts && ep.alts[i]) || "";
      img.loading = "lazy";
      img.decoding = "async";
      photos.appendChild(img);
    });
    if (photos.children.length) card.appendChild(photos);
    card.appendChild(envelope(ep.secondDate));
    return card;
  }

  function renderComingSoon() {
    var card = el("article", "bd-episode bd-soon");
    card.appendChild(el("p", "bd-num", "Episode I"));
    card.appendChild(el("h4", "bd-names", "Coming soon"));
    card.appendChild(el("p", "bd-where", "The first pair hasn't met yet. It could be you."));
    var sealed = el("div", "bd-envelope bd-envelope-shut");
    sealed.innerHTML =
      '<div class="bd-seal" aria-hidden="true"><span class="bd-flap"></span><span class="bd-wax"></span></div>';
    card.appendChild(sealed);
    return card;
  }

  fetch("features/blind-date-episodes.json")
    .then(function (res) { return res.ok ? res.json() : { episodes: [] }; })
    .catch(function () { return { episodes: [] }; })
    .then(function (data) {
      var episodes = (data && data.episodes) || [];
      var draft = /[?&]draft=1/.test(location.search);
      if (!episodes.length && !draft) return;
      mount.appendChild(el("h3", "bd-title", "The episodes"));
      var strip = el("div", "bd-strip");
      if (!episodes.length) strip.appendChild(renderComingSoon());
      episodes.forEach(function (ep) { strip.appendChild(renderEpisode(ep)); });
      mount.appendChild(strip);
      mount.hidden = false;
    });
})();

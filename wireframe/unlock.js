// Locked gallery covers: each Work card starts sealed behind two cabinet doors
// with a keyhole plate. Tapping it slides the skeleton key in, turns it, and
// swings the doors open so the photo blooms into color.
(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll(".work-card"));
  if (!cards.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canAnimate = typeof Element.prototype.animate === "function";

  var PLATE =
    '<svg class="lock-plate" viewBox="0 0 64 120" aria-hidden="true" focusable="false">' +
      '<path class="plate-body" d="M32 4C40 4 44 10 44 16C52 18 56 26 56 34V86C56 94 52 102 44 104C44 110 40 116 32 116C24 116 20 110 20 104C12 102 8 94 8 86V34C8 26 12 18 20 16C20 10 24 4 32 4Z"/>' +
      '<path class="plate-rule" d="M32 4C40 4 44 10 44 16C52 18 56 26 56 34V86C56 94 52 102 44 104C44 110 40 116 32 116C24 116 20 110 20 104C12 102 8 94 8 86V34C8 26 12 18 20 16C20 10 24 4 32 4Z" transform="translate(32 60) scale(.8) translate(-32 -60)"/>' +
      '<circle class="plate-screw" cx="32" cy="15" r="1.6"/>' +
      '<circle class="plate-screw" cx="32" cy="105" r="1.6"/>' +
      '<path class="keyhole" d="M32 47.5a6.5 6.5 0 0 1 4 11.6L38.5 76h-13L28 59.1a6.5 6.5 0 0 1 4-11.6Z"/>' +
    "</svg>";

  var KEY =
    '<svg class="lock-key" viewBox="0 0 40 90" aria-hidden="true" focusable="false">' +
      '<circle cx="20" cy="15" r="12"/>' +
      '<circle cx="20" cy="15" r="4.5"/>' +
      '<circle class="key-dot" cx="20" cy="6.2" r="1.3"/>' +
      '<circle class="key-dot" cx="28.8" cy="15" r="1.3"/>' +
      '<circle class="key-dot" cx="20" cy="23.8" r="1.3"/>' +
      '<circle class="key-dot" cx="11.2" cy="15" r="1.3"/>' +
      '<path d="M15.5 30.5h9M16.5 33.5h7M20 27v51M20 60h8v5h-4v4h5v5h-9"/>' +
    "</svg>";

  cards.forEach(function (card) {
    var frame = card.querySelector(".work-frame");
    var photo = card.querySelector(".work-photo");
    var title = card.querySelector("h3");
    if (!frame || !photo) return;

    // The scroll-in grayscale tween would fight the unlock bloom, so locked
    // photos opt out of it.
    photo.classList.remove("js-work");
    card.classList.add("is-locked");

    var lock = document.createElement("button");
    lock.type = "button";
    lock.className = "lock";
    lock.setAttribute("aria-label", "Unlock the " + (title ? title.textContent : "") + " gallery");
    lock.innerHTML =
      '<span class="lock-door lock-door-l" aria-hidden="true"><span class="plate-half">' + PLATE + "</span></span>" +
      '<span class="lock-door lock-door-r" aria-hidden="true"><span class="plate-half">' + PLATE + "</span></span>" +
      '<span class="lock-mech" aria-hidden="true">' + KEY + "</span>" +
      '<span class="lock-hint" aria-hidden="true"><span class="hint-long">Sealed · </span>Tap to unlock</span>';
    frame.appendChild(lock);

    lock.addEventListener("click", function () {
      if (lock.disabled) return;
      lock.disabled = true;
      unlock(card, lock, photo);
    });
  });

  function play(el, frames, options) {
    return el.animate(frames, Object.assign({ fill: "forwards" }, options)).finished;
  }

  function wait(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  function finish(card, lock) {
    card.classList.remove("is-locked", "is-unlocking");
    card.classList.add("is-unlocked");
    lock.remove();
    var door = card.querySelector(".step-inside");
    if (door) {
      door.focus({ preventScroll: true });
    } else {
      card.setAttribute("tabindex", "-1");
      card.focus({ preventScroll: true });
    }
  }

  function unlock(card, lock, photo) {
    if (reduce || !canAnimate) {
      card.classList.add("is-unlocking");
      setTimeout(function () { finish(card, lock); }, reduce ? 200 : 0);
      return;
    }

    var key = lock.querySelector(".lock-key");
    var hint = lock.querySelector(".lock-hint");
    var keyholes = lock.querySelectorAll(".keyhole");
    var left = lock.querySelector(".lock-door-l");
    var right = lock.querySelector(".lock-door-r");
    var start = getComputedStyle(key);

    card.classList.add("is-unlocking");
    play(hint, [{ opacity: getComputedStyle(hint).opacity }, { opacity: 0 }], { duration: 200 });

    // 1. The key slides down into the keyhole.
    play(key, [
      { opacity: start.opacity, transform: start.transform === "none" ? "translateY(-40px)" : start.transform },
      { opacity: 1, transform: "translateY(0) rotate(0deg)" }
    ], { duration: 460, easing: "cubic-bezier(.3,.7,.3,1)" })
      // 2. It turns a quarter turn, overshooting a little like a real latch.
      .then(function () {
        return play(key, [
          { transform: "translateY(0) rotate(0deg)" },
          { transform: "translateY(0) rotate(98deg)", offset: 0.75 },
          { transform: "translateY(0) rotate(90deg)" }
        ], { duration: 560, easing: "cubic-bezier(.5,0,.3,1)" });
      })
      // 3. Click: the keyhole flashes and the plate jolts.
      .then(function () {
        Array.prototype.forEach.call(keyholes, function (hole) {
          play(hole, [{ fill: "#0A0A0A" }, { fill: "#F2EEE6" }], { duration: 160 });
        });
        play(lock.querySelector(".lock-mech"), [
          { transform: "translateY(0)" }, { transform: "translateY(1.5px)" }, { transform: "translateY(0)" }
        ], { duration: 140, fill: "none" });
        return wait(220);
      })
      // 4. The doors swing open and the photo blooms into color.
      .then(function () {
        var doorTiming = { duration: 950, easing: "cubic-bezier(.65,0,.25,1)" };
        play(key, [{ opacity: 1 }, { opacity: 0 }], { duration: 260 });
        play(left, [
          { transform: "rotateY(0deg)", opacity: 1 },
          { transform: "rotateY(-72deg)", opacity: 1, offset: 0.7 },
          { transform: "rotateY(-100deg)", opacity: 0 }
        ], doorTiming);
        play(photo, [
          { filter: "grayscale(1) brightness(0.7)", transform: "scale(1.08)" },
          { filter: "grayscale(0) brightness(1)", transform: "scale(1)" }
        ], { duration: 1300, easing: "cubic-bezier(.2,.7,.2,1)", fill: "none" });
        return play(right, [
          { transform: "rotateY(0deg)", opacity: 1 },
          { transform: "rotateY(72deg)", opacity: 1, offset: 0.7 },
          { transform: "rotateY(100deg)", opacity: 0 }
        ], doorTiming);
      })
      .then(function () { finish(card, lock); })
      .catch(function () { finish(card, lock); });
  }
})();

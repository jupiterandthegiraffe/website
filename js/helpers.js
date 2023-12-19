const { SplitText } = require("gsap/dist/SplitText");

function swing(p) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}

exports.adjustVolume = (
  element,
  newVolume,
  { duration = 1000, easing = swing, interval = 13 }
) => {
  const originalVolume = element.volume;
  const delta = newVolume - originalVolume;

  if (!delta || !duration || !easing || !interval) {
    element.volume = newVolume;
    return Promise.resolve();
  }

  const ticks = Math.floor(duration / interval);
  let tick = 1;

  return new Promise((resolve) => {
    const timer = setInterval(() => {
      element.volume = originalVolume + easing(tick / ticks) * delta;

      if (++tick === ticks + 1) {
        clearInterval(timer);
        resolve();
      }
    }, interval);
  });
};

exports.triggerPopup = (message, points = 1, code) => {
  const pointsPopup = document.querySelector(".points-popup");
  const currentAwards = JSON.parse(localStorage.awards);
  const currentAwardCodes = currentAwards.map((award) => award.id);

  if (currentAwardCodes.indexOf(code) <= -1) {
    window.localStorage.setItem(
      "user-points",
      Number(window.localStorage.getItem("user-points")) + points
    );

    pointsPopup.querySelector(".points-popup__points").innerText =
      window.localStorage.getItem("user-points");
    pointsPopup.querySelector(".points-popup__text").innerText = message;

    pgia.play(pointsPopup, "Points Popup");

    dataLayer.push({ event: `Award ${code} achieved` });

    const awards = JSON.parse(window.localStorage.getItem("awards")) || [];
    awards.push({
      title: message,
      id: code,
      score: points,
    });
    window.localStorage.setItem("awards", JSON.stringify(awards));

    setTimeout(() => {
      pgia.play(pointsPopup, "Points Popdown");
    }, 5000);
  } else if (currentAwardCodes.indexOf(code) > -1) {
    console.log("code found, checking if it has message and score");
    currentAwards.forEach((award, index) => {
      if (award.id === code && !award.title && !award.score) {
        console.log(
          "current award achieved but doesn't have score or message. Updating..."
        );
        currentAwards.splice(index, 1, {
          title: message,
          id: code,
          score: points,
        });
      }
    });

    window.localStorage.setItem("awards", JSON.stringify(currentAwards));
  }
};

exports.playTransitionText = (word, animationName, cb) => {
  const transitionTextEl = document.getElementById("transition-text");
  const blur = document.getElementById("backdrop-blur");

  pgia.play(blur, animationName);

  if (transitionTextEl) {
    transitionTextEl.innerHTML = word;
    transitionTextEl.style.display = "block";

    transitionTextEl.setAttribute("aria-live", "polite");

    const transitionSplitText = new SplitText(transitionTextEl, {
      type: "words,lines",
    });

    gsap.set(transitionSplitText.lines, { overflow: "hidden" });

    const tl = gsap.timeline({
      onComplete: () => {
        transitionTextEl.removeAttribute("aria-live");
        cb();
      },
    });

    tl.from(transitionSplitText.words, {
      y: "200%",
      autoAlpha: 0,
      stagger: 0.05,
    });

    tl.to(
      "canvas.webgl",
      {
        autoAlpha: 0,
      },
      "-=0.5"
    );

    tl.to(
      document.querySelectorAll("#transition-text div"),
      {
        y: "-100%",
        autoAlpha: 0,
        stagger: "0.025",
      },
      "1.5"
    );
  }
};

const { triggerPopup } = require("./helpers");
const { SplitText } = require("gsap/dist/SplitText");

exports.default = function () {
  triggerPopup("You're extra special. Merry Christmas!", 3, "merry_chrismas");

  const merryChristmas = document.getElementById("merry-christmas");
  const contentText = document.getElementById("content-text");
  const merryChristmasSplitText = new SplitText(merryChristmas, {
    type: "words",
  });
  const contentTextSplitText = new SplitText(contentText, {
    type: "words",
  });

  const merryChristmasTimeline = gsap.timeline();

  merryChristmasTimeline.from(merryChristmasSplitText.words, {
    opacity: 0,
    y: -200,
    backgroundColor: "white",
    stagger: 0.1,
    borderRadius: "50%",
    ease: "power1.out",
  });

  merryChristmasTimeline.from(
    contentTextSplitText.words,
    {
      opacity: 0,
      y: -200,
      borderRadius: "50%",
      stagger: 0.1,
      backgroundColor: "white",
      ease: "power1.out",
    },
    "<50%"
  );

  require("./experience.js");
};

const { SplitText } = require("gsap/dist/SplitText");

exports.default = function () {
  const sections = gsap.utils.toArray(
    ".page-overlay > .page-overlay__content-container"
  );
  sections.forEach((section) => {
    const sectionSplitText = new SplitText(
      section.querySelectorAll(".process__split-text"),
      { type: "words" }
    );
    const button = section.querySelector("button");

    gsap.set(sectionSplitText.words, { display: "none" });

    const sectionSplitTextTimeline = gsap.from(sectionSplitText.words, {
      y: 20,
      autoAlpha: 0,
      stagger: 0.05,
      paused: true,
      duration: 0.5,
    });

    if (button) {
      button.addEventListener("click", (e) => {
        gsap.set(sectionSplitText.words, { display: "inline-block" });
        gsap.set(section.querySelectorAll(".process__split-text"), {
          attr: { role: "alert", "aria-live": "assertive" },
        });
        sectionSplitTextTimeline.play();
        gsap.to(button, { autoAlpha: 0 });
      });
    }
  });
};

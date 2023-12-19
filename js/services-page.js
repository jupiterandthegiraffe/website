const { SplitText } = require("gsap/dist/SplitText");

exports.default = function () {
  const services = document.querySelector(".services");
  if (services) {
    ScrollTrigger.matchMedia({
      "(min-width: 576px)": () => {
        const svgNumberTimeline = gsap.timeline({ paused: true });
        svgNumberTimeline.from(".draw-me", {
          duration: 1,
          drawSVG: 0,
        });

        svgNumberTimeline.to(".services__column", {
          autoAlpha: 0.5,
          stagger: 0.025,
        });

        svgNumberTimeline.to(".services__column", {
          autoAlpha: 1,
          stagger: 0.025,
        });

        const servicesTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: services,
            start: "top bottom+=100",
            end: "+=1000px",
            scrub: 1,
            onUpdate: (el) => {
              svgNumberTimeline.seek(el.progress);
            },
            duration: 0,
          },
        });

        servicesTimeline.from(".services__column", {
          autoAlpha: 0,
          stagger: 0.025,
        });

        // Need to create a seperate pin ScrollTrigger
        ScrollTrigger.create({
          trigger: ".services",
          start: "center center",
          end: "+=1000px",
          pin: true,
        });
      },
    });
  }

  const serviceSlider = document.getElementById("service-slider");
  const sliderInfo = document.getElementById("slider-info");
  const sliderInfoSlides = sliderInfo.querySelectorAll(".slider-info__slide");
  let previousSlide = serviceSlider.value - 1;

  serviceSlider.addEventListener("input", (e) => {
    const value = Number(e.target.value);
    const slideTl = gsap.timeline({});
    let newSlide;

    Array.from(sliderInfoSlides).forEach((slide, index) => {
      if (index + 1 === value) {
        newSlide = index;
      }

      slide.setAttribute("data-current", index + 1 === value);

      slideTl.fromTo(
        slide,
        {
          x: index === previousSlide ? 0 : previousSlide > index ? -50 : 50,
        },
        {
          autoAlpha: Number(index + 1 === value),
          x: index === previousSlide ? (previousSlide < value ? -50 : 50) : 0,
        },
        "<"
      );

      if (index + 1 === value) {
        gsap.from(slide.querySelector("path"), {
          drawSVG: "0 0",
          delay: 0.3,
        });

        const titleText = new SplitText(slide.querySelector("h3"), {
          type: "chars",
        });
        gsap.from(titleText.chars, {
          y: "100%",
          stagger: 0.025,
          delay: 0.2,
          ease: "power3.out",
        });
      }
    });

    previousSlide = newSlide;
  });

  // Set initial from HTML
  sliderInfoSlides[serviceSlider.value - 1].setAttribute("data-current", true);
  gsap.set(sliderInfoSlides[serviceSlider.value - 1], { autoAlpha: 1 });

  const calculateHeight = () => {
    let totalHeight = 0;

    Array.from(sliderInfoSlides).forEach((slide) => {
      slide.style.position = "";
      const currentSlideHeight = parseInt(
        getComputedStyle(slide).getPropertyValue("height")
      );
      totalHeight =
        currentSlideHeight > totalHeight ? currentSlideHeight : totalHeight;
      slide.style.position = "absolute";
      console.log(totalHeight, currentSlideHeight);
    });

    sliderInfo.style.height = totalHeight + "px";
  };

  window.addEventListener("resize", calculateHeight);

  calculateHeight();
};

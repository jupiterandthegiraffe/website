exports.default = function() {
  const services = document.querySelector(".services");
  if (services) {
    ScrollTrigger.matchMedia({
      "(min-width: 576px)": () => {
        const svgNumberTimeline = gsap.timeline({paused: true});
        svgNumberTimeline.from(".draw-me", {
          duration: 1,
          drawSVG: 0,
        });

        const servicesTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: services,
            start: "top bottom+=200px",
            end: "+=3000px",
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
          end: "+=2000px",
          pin: true,
        });
      },
    });
  }
}
exports.default = function() {
  const people = gsap.utils.toArray(".person");
  if (people.length) {
    people.forEach((person) => {
      const image = person.querySelector(".person-image");
      const name = person.querySelector(".person__overlay-text");
      const title = person.querySelector(".person__overlay-title");
      const readMore = person.querySelector(".person__read-more-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: person,
          start: "top bottom",
          end: "top center",
          scrub: 0.3,
        },
      });

      tl.from(image, { autoAlpha: 0, scale: 0.9 })
        .from(name, { autoAlpha: 0, x: "-100%" })
        .from(title, { y: "-100%", autoAlpha: 0 })
        .from(readMore, { y: "-100%", autoAlpha: 0 });
    });
  }
}
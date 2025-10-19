document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const bentoItems = gsap.utils.toArray('.bento-hero__grid-item');

  gsap.set(bentoItems, {
    autoAlpha: 0,
    y: 50,
  });

  ScrollTrigger.batch(bentoItems, {
    start: 'top 85%',
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.15,
        ease: 'power2.out',
      }),
  });
});

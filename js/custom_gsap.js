// Initialize Lenis
const lenis = new Lenis();

// Sync Lenis with ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

// Use requestAnimationFrame to continuously update both Lenis and ScrollTrigger
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update(); // ensures ScrollTrigger tracks Lenis
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#logo", {
    scale: 0,
    delay: 1,
    duration: 1,
    ease: "back.out",
  });

  gsap.from("#navbar li", {
    opacity: 0,
    y: -10,
    delay: 0.5,
    stagger: 0.3,
    duration: 1,
    ease: "back.out",
  });

  // Remove this if you're triggering animation on scroll
  // gsap.from("#hero", {
  //   scale: 0,
  //   y: 10,
  //   delay: 1,
  //   duration: 1,
  //   ease: "back.out",
  // });

});

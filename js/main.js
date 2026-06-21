// TruthWare — site JS
// 1. Mobile nav toggle
// 2. Signal reveal: .reveal-signal elements shift to accent colour on scroll
// 3. Scroll story: .story-line elements fade + rise into view with stagger

document.addEventListener("DOMContentLoaded", () => {

  // ---- 1. Mobile nav ----
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // ---- 2. Signal reveal (.reveal-signal) ----
  const signalTargets = document.querySelectorAll(".reveal-signal");
  if (signalTargets.length) {
    const signalObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-signal");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    signalTargets.forEach((el) => signalObs.observe(el));
  }

  // ---- 3. Scroll story (.story-line) ----
  // Each line triggers independently as it enters the viewport, with a
  // small index-based delay so sibling lines stagger rather than all
  // firing at once if they happen to enter the viewport together.
  const storyLines = document.querySelectorAll(".story-line");
  if (storyLines.length) {
    const storyObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [...entry.target.parentElement.children];
            const index = siblings.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, index * 160);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    storyLines.forEach((el) => storyObs.observe(el));
  }

});

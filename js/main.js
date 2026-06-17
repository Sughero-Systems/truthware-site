// TruthWare — site JS
// 1. Mobile nav toggle
// 2. The "signal" reveal: elements with .reveal-signal quietly shift from
//    ink to the signal colour once they're actually in view — a small,
//    literal nod to "look again." Respects prefers-reduced-motion via the
//    global CSS rule that zeroes transition durations.

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  const signalTargets = document.querySelectorAll(".reveal-signal");
  if (signalTargets.length) {
    const observer = new IntersectionObserver(
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
    signalTargets.forEach((el) => observer.observe(el));
  }
});

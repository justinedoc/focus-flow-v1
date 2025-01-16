import { ScrollRevealObject } from "scrollreveal";

export const animations = (sr: ScrollRevealObject) => {
  // Revealing elements from different directions
  sr.reveal(".__anim-right", {
    origin: "right",
  });
  sr.reveal(".__anim-left", {
    origin: "left",
  });
  sr.reveal(".__anim-top", {
    origin: "top",
  });
  sr.reveal(".__anim-bottom", {
    origin: "bottom",
  });

  // Fade-in animation
  sr.reveal(".__fade-in", {
    opacity: 0,
    duration: 900,
    easing: "ease-in-out",
    distance: "15px",
    viewFactor: 0.4,
  });

  // Adding delay animations for elements with delay classes
  for (let i = 1; i < 50; i++) {
    const elements = document.querySelectorAll(`.__delay-${i * 50}`);
    if (elements.length) {
      sr.reveal(`.__delay-${i * 50}`, { delay: i * 50 });
    }
  }
};

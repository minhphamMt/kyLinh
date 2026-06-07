window.App = window.App || {};

window.App.initTilt = () => {
  const canTilt =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canTilt) return;

  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach((card) => {
    let frame = 0;

    const applyTilt = (transform, shadow) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        card.style.transform = transform;
        card.style.boxShadow = shadow;
      });
    };

    const reset = () => {
      card.classList.remove("is-tilting");
      card.classList.add("is-resetting");

      applyTilt("perspective(1000px) rotateX(0deg) rotateY(0deg)", "");
      window.setTimeout(() => card.classList.remove("is-resetting"), 220);
    };

    card.addEventListener("pointerenter", () => {
      card.classList.add("is-tilting");
      card.classList.remove("is-resetting");
    });

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = y * -5.5;
      const rotateY = x * 7;

      applyTilt(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -2px, 0)`,
        `${-x * 14}px ${22 + y * 8}px 70px rgba(125, 77, 115, 0.2)`
      );
    });

    card.addEventListener("pointerleave", reset);
    card.addEventListener("blur", reset);
  });
};

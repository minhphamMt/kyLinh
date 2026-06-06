window.App = window.App || {};

window.App.initTilt = () => {
  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach((card) => {
    const reset = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      card.style.boxShadow = "";
    };

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = y * -8;
      const rotateY = x * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.boxShadow = `${-x * 18}px ${24 + y * 12}px 80px rgba(16, 36, 62, 0.24)`;
    });

    card.addEventListener("pointerleave", reset);
    card.addEventListener("blur", reset);
  });
};

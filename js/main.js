document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector("#pageLoader");
  const hideLoader = () => loader?.classList.add("is-hidden");

  if (document.readyState === "complete") {
    window.setTimeout(hideLoader, 650);
  } else {
    window.addEventListener("load", () => window.setTimeout(hideLoader, 650), {
      once: true,
    });
    window.setTimeout(hideLoader, 2200);
  }

  window.App.initScrollReveal?.();
  window.App.initTilt?.();
});

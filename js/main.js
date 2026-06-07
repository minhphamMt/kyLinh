const forceTopOnEntry = () => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  if (window.location.hash) {
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`
    );
  }

  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previousScrollBehavior;
};

forceTopOnEntry();

window.addEventListener("pageshow", forceTopOnEntry);

document.addEventListener("DOMContentLoaded", () => {
  forceTopOnEntry();

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

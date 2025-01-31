window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const parallaxContainer = document.querySelector(".parallax-container");
  const foreground = document.querySelector(".foreground");
  const titleTexts = document.querySelectorAll(".title-text");

  const progress =
    scrolled / (parallaxContainer.offsetHeight - window.innerHeight);

  if (progress < 1) {
    foreground.style.transform = `translateX(-${scrolled * 0.5}px)`;
    titleTexts.forEach((titleText) => {
      titleText.style.transform = `translateX(-${scrolled * 0.5}px)`;
    });
  } else {
    foreground.style.transform = `translate(-${
      (parallaxContainer.offsetHeight - window.innerHeight) * 0.5
    }px, -${scrolled - parallaxContainer.offsetHeight + window.innerHeight}px)`;
    titleTexts.forEach((titleText) => {
      titleText.style.transform = `translate(-${
        (parallaxContainer.offsetHeight - window.innerHeight) * 0.5
      }px, -${
        scrolled - parallaxContainer.offsetHeight + window.innerHeight
      }px)`;
    });
  }
});

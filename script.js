document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;
  let isThrottled = false;

  document.addEventListener("wheel", (e) => {
    setThrottling()
    const direction = e.deltaY < 0 ? -1 : 1;

    scroll(direction)
    scrollToCurrentSection()
  });

  function setThrottling() {
    if (isThrottled) return;
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
    }, 500);
  }

  function scroll(direction) {
    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = currentSectionIndex === 0;
      if (firstSection) return;
    }
    currentSectionIndex += direction;
  }

  function scrollToCurrentSection() {
    sections[currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

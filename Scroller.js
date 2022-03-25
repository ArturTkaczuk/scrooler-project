class Scroller {
  constructor (rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = document.querySelectorAll("section");
    this.currentSectionIndex = 0;
    this.isThrottled = false;

    this.isScrolledIntoView(this.sections[0])
  }

  isScrolledIntoView(element) {
    const rect = element.getBoundingClientRect()
    console.log(rect)
  }

  listenScroll = (e) => {
    if (this.isThrottled) return;
    this.isThrottled = true;

    setTimeout(() => {
      this.isThrottled = false;
    }, 500);
    const direction = e.deltaY < 0 ? -1 : 1;

    this.scroll(direction)
    this.scrollToCurrentSection()
    console.log(e.deltaY)
  }

  scroll = (direction) => {
    console.log(direction)
    if (direction === 1) {
      const isLastSection = this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = this.currentSectionIndex === 0;
      if (firstSection) return;
    }
    this.currentSectionIndex += direction;
  }

  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
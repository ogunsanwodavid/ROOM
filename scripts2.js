carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("scroll", infiniteScroll2);
wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
wrapper2.addEventListener("mouseleave", autoPlay2);

carousel2.addEventListener("mousedown", dragStart);
carousel2.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel2.addEventListener("scroll", infiniteScroll);
wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper2.addEventListener("mouseleave", autoPlay);

carousel.addEventListener("mousedown", dragStart2);
carousel.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel.addEventListener("scroll", infiniteScroll2);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
wrapper.addEventListener("mouseleave", autoPlay2);
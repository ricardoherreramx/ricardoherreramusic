var slider = document.getElementsByTagName('main')[0];
let isDown = false;
let startX;
let scrollLeft;

// Horizontal Scroll
window.addEventListener('wheel', function(e) {
slider.scrollLeft += e.deltaY});

// Cursor on release
slider.addEventListener("mouseleave", () => {isDown = false});
slider.addEventListener("mouseup", () => {isDown = false});

// Cursor on click
slider.addEventListener("mousedown", e => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// Drag the content
slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
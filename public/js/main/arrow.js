// Smooth scrolling on click
document.querySelectorAll('.scroller-container').forEach(function(container) {
    container.addEventListener('wheel', function(event) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    });
  });
  
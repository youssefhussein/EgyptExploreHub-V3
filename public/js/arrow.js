const imageList = document.querySelector('.image-list');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;
const maxIndex = imageList.children.length - 1;
const imageWidth = imageList.children[0].offsetWidth;

function hideArrows() {
  if (currentIndex === 0) {
    leftArrow.style.display = 'none';
  } else {
    leftArrow.style.display = 'block';
  }

  if (currentIndex === maxIndex) {
    rightArrow.style.display = 'none';
  } else {
    rightArrow.style.display = 'block';
  }
}

leftArrow.addEventListener('click', function() {
  if (currentIndex > 0) {
    currentIndex--;
    const moveAmount = currentIndex * imageWidth;
    imageList.style.transform = `translateX(-${moveAmount}px)`;
    hideArrows();
  }
});

rightArrow.addEventListener('click', function() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    const moveAmount = currentIndex * imageWidth;
    imageList.style.transform = `translateX(-${moveAmount}px)`;
    hideArrows();
  }
});

hideArrows(); // Initially hide arrows based on the initial index

function changeCss () {
    var navElement = document.querySelector("header");
    window.scrollY > 600 ? navElement.style.backgroundColor = 'white': navElement.style.color = 'black';
    window.scrollY < 600 ? navElement.style.backgroundColor = 'transparent': navElement.style.color = 'black';
  }
  window.addEventListener("scroll", changeCss , false);
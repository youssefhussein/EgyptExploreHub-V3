function changeCss () {
    var navElement = document.querySelector("header");
    window.scrollY > 600 ? navElement.style.backgroundColor = 'white': navElement.style.color = 'black';
    window.scrollY < 600 ? navElement.style.backgroundColor = 'transparent': navElement.style.color = 'black';
  }
  window.addEventListener("scroll", changeCss , false);
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('nav').addClass('nav-fixed');
    } else {
        $('nav').removeClass('nav-fixed');
    }
});
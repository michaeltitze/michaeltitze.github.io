function toggleMenu(){
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    var navi = document.querySelector('.nav-bar');
    var lines = document.querySelectorAll('.line');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    navi.classList.toggle('active');

    for (var i = 0; i < lines.length; i++) {
        lines[i].classList.toggle('active'); // ändert die Hintergrundfarbe jedes line-Elements in weiß
      }

}

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
});

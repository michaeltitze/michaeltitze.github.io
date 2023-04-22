const bodyContent = document.querySelector('body');
let navBar = `<header><nav class='nav-bar'>`;
let navLogo = '<a class="logo-text" href="https://michaeltitze.github.io/#Home">michaelTitze</a>';
let navMenu = '<ul class="menu">';




const renderMenu = () => {
    const menuItems = ['Home','Projects','About','Angebot', 'Kontakt'];    
    for(let i=0; i<menuItems.length; i++){
        navMenu += `<li class="menu-punkt${i}"><a class="nav-link" href="/#${menuItems[i]}">${menuItems[i]}</a></li>`;
    }
}

renderMenu();

navMenu += `</ul>
<div class="menu-toggle" onclick="toggleMenu()">
<div class="line"></div>
<div class="line"></div>
<div class="line"></div></div>
</nav></header>`;
bodyContent.innerHTML +=navBar += navLogo += navMenu;




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
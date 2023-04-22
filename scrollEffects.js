const imageContainer = document.querySelector('.image-container');
var divHeight = document.querySelector('.image-section');
const blue = imageContainer.classList.contains('blue');
const red = imageContainer.classList.contains('red');
const yellow = imageContainer.classList.contains('yellow');
const salmon = imageContainer.classList.contains('salmon');
const orange = imageContainer.classList.contains('orange');


//Bildschirmgröße Herausfinden

var screenHeight = window.innerHeight

const documentHeight = document.documentElement.scrollHeight;




window.addEventListener("resize", function() {
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    console.log("Screen height: " + screenHeight);
    console.log("Screen width: " + screenWidth);
});

window.addEventListener("DOMContentLoaded",()=>{
    imageContainer.style.backgroundColor = '#123456';
})

window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    console.log("Window Height: " + screenHeight);
    

    if((scrolled/4)==screenHeight){
        imageContainer.style.backgroundColor = '#123456';
    }

    if((scrolled/4)<screenHeight){
        imageContainer.style.backgroundColor = '#122448';
    }

    if((scrolled/3)<screenHeight){
        imageContainer.style.backgroundColor = '#123456';
    }

    if((scrolled/2)<screenHeight){
        imageContainer.style.backgroundColor = '#122448';
    }

    if(scrolled<screenHeight){
        imageContainer.style.backgroundColor = '#123456';
     
    }

    console.log("Scrolled: "+ scrolled + " Scrolled/2: " + (scrolled/2)+ " Scrolled/3: " + scrolled/3  + " Scrolled/4: " + scrolled/4);
})


const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

const scrolltop = document.querySelector("#toTop");
scrolltop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left : 0,
        behavior: "smooth",
    });
});

const scroll = document.querySelector('#navli');
scroll.addEventListener("click", function(){
    window.scrollTo({
        behavior: "smooth",
    });
});
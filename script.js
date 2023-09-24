const burger = document.querySelector(".res-nav");
const header = document.querySelector(".main-header");
const nav_bar = document.querySelector(".nav-bar");


burger.addEventListener('click',()=>{
    header.classList.toggle('v-hidden');
    header.classList.toggle('h-nav');
})

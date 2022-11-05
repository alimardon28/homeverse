let navBar = document.querySelector('.header_nav_ul1');
let hamburgerMenyu = document.querySelector('.header_nav_ul2_li_hamburger');
let clearHamburgerMenyu = document.querySelector('.clearHamburger');

hamburgerMenyu.addEventListener('click' , ()=>{
    navBar.classList.toggle('active_ul1')
    clearHamburgerMenyu.classList.remove('active_ul1')
})
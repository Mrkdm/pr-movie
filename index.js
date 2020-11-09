const btn = document.getElementById('main-nav__bar-menu');
btn.addEventListener("click", function(){
    document.querySelector('.main-nav__menu-categories').classList.toggle('active');
});
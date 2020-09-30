const menuImage = document.querySelector('#menu');
const onlyMenuList = document.querySelectorAll('.only-menu');
const menuList = document.querySelectorAll('.menu-list');
const navBar = document.querySelector('#nav-bar');
const closeMenu = document.querySelector('#close-menu');
const menuItems = document.querySelectorAll('.menu-item');


menuImage.addEventListener("click", (e)=> {
    onlyMenuList.forEach(e => e.classList.add('hidden'));
    menuList.forEach(e => e.classList.remove('hidden'));
    navBar.classList.add('nav-column');
    closeMenu.classList.add('menu-close-align');
    e.stopPropagation();
})

closeMenu.addEventListener("click", () => {
    onlyMenuList.forEach(e => e.classList.remove('hidden'));
    menuList.forEach(e => e.classList.add('hidden'));
    navBar.classList.remove('nav-column');
})

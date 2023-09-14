// set menu Hamburger
const iconHamburger = document.querySelector('.linkContainer img');
console.log(iconHamburger);

const navBarMobile = document.querySelector('.navBarMobile');
console.log(navBarMobile);

iconHamburger.addEventListener('click', () => {
    console.log('Hello');
    navBarMobile.classList.toggle('hidden');
})
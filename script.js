//  const header_btn = document.querySelector ('.hamburguesa-btn')
//  const header_menu = document.querySelector('.main-ul')


//  header_btn.addEventListener('click', () => {     header_menu.style.display = 'block'
//  })

// const navToggle = document.querySelector(".hamburguesa-btn")
// const navMenu = document.querySelector(".main-ul")

// navToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("nav-menu_visible");
// });


const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

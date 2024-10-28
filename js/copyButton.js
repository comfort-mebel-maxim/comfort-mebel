let buttonCopyExample = document.querySelector("#copy-example")

buttonCopyExample.addEventListener('click', (event) => {
//     const textButtonCopyShablon = 
// `Салмова Ирина Борисовна
// г. Нижний Новгород,
// р-он Приокский,
// ул. Проспект Гагарина дом 112 А, подъезд 2, этаж 3, кв 23
// телефон: 8 920 023 52 33
// #диван евро книжка, цвет серый
// Улучшенный! Пружинный блок
// Стоимость: 20 500 + 1 800 + 1 600 
// = 🔥23 900 рублей🔥
// * 3 000 руб предоплата ✅
// Остаток: 20 900 рублей ⭐️
// Срочно 🚨`
//     navigator.clipboard.writeText(textButtonCopyShablon); 
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const nav = document.querySelector('.nav')
const navButton = document.querySelector('.nav-menu-button')
const navCloseButton = document.querySelector('.nav-menu-button-close')
const navList = document.querySelector('.nav-list')
const navListItems = document.querySelectorAll('.nav-list-item')
navButton.addEventListener('click', () => {
    navList.classList.contains('show-nav-list') ? navList.classList.remove('show-nav-list') : navList.classList.add('show-nav-list')
    navButton.style.display = "none"
    navCloseButton.style.display = "flex"
    nav.style.width = "100%"
    nav.style.backgroundColor = "black"
})

navCloseButton.addEventListener('click', () => {
    navList.classList.remove('show-nav-list')
    navButton.style.display = "block"
    navCloseButton.style.display = "none"
    nav.style.width = "fit-content"
    nav.style.backgroundColor = "transparent"
})

navListItems.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('show-nav-list')
        navButton.style.display = "block"
        navCloseButton.style.display = "none"
        nav.style.width = "fit-content"
        nav.style.backgroundColor = "transparent"
    })
})
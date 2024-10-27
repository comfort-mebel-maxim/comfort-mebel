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
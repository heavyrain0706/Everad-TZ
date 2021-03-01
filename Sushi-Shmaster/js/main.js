document.addEventListener("DOMContentLoaded", init)

function init(){

    const orderBtns = document.querySelectorAll('.popular__item-btn');
    let noteDate = document.querySelector('.footer__date');
    let date = new Date();

    //Кнопки заказа роллов
    orderBtns.forEach(btn => {
        if(btn.innerText == 'Заказать'){
            btn.classList.add('available');
        } else {
            btn.classList.add('not-available');
            btn.setAttribute("disabled", "disabled");
        };
    })

    //слайдер
    const swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
    });

    //Дата
    noteDate.innerText = `${date.getFullYear()}`;
}

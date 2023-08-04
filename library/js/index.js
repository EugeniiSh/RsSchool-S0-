console.log();
console.log('1.Вёрстка валидная +10(10)');
console.log('2.Вёрстка семантическая +16(16)');
console.log('3.Вёрстка соответствует макету +54(54)');
console.log('4.Общие требования к верстке +18(20) \n - плавная прокрутка по якорям -2.');

let burger = document.querySelector('.heading-burger');
let burgerBlock = document.querySelector('.burger-block');
let navMenu = document.querySelector('.heading-navigation');
let navBlock = document.querySelector('.navigation-block');

burger.addEventListener('click',

    function() 
    {
        console.log('Burger-click');
        navMenu.classList.toggle('active');
    }
);

burger.addEventListener('click',

    function() 
    {
        console.log('Burger-click2');
        burger.classList.toggle('active');
    }
);

// Код для закрытия меню при нажатии на ссылку
let links = Array.from(navBlock.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => 
    {
        link.addEventListener("click", closeOnClick);
    }
);

// Закрытие попапа при клике на меню
function closeOnClick() 
{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}

window.addEventListener('click', (event) => 
{
    if((event.target !== burger) && (event.target !== navMenu) && (event.target !== burgerBlock))
    {
        if(burger.classList.contains('active'))
        {
            burger.classList.remove('active')
        };

        if(navMenu.classList.contains('active'))
        {
            navMenu.classList.remove('active')
        };
    }    
});
console.log('Library part 1');
console.log('1.Вёрстка валидная +10(10)');
console.log('2.Вёрстка семантическая +16(16)');
console.log('3.Вёрстка соответствует макету +54(54)');
console.log('4.Общие требования к верстке +18(20) \n - плавная прокрутка по якорям -2. \n');

console.log('Library part 2');
console.log('1.Вёрстка соответствует макету. Ширина экрана 768px +26 (26)');
console.log('2.Нет горизонтальной прокрутки до 640px, \n контент страницы сохранется +12(12)');
console.log('3.На ширине экрана 768рх реализовано адаптивное меню +10 (12) \n - размеры открытого бургер-меню соответствуют макету -2');

//BURGER-MENU/////////////////////////////////////////////////////

let burger = document.querySelector('.heading-burger');
let burgerBlock = document.querySelector('.burger-block');
let navMenu = document.querySelector('.heading-navigation');
let navBlock = document.querySelector('.navigation-block');

burger.addEventListener('click',

    function() 
    {
        navMenu.classList.toggle('active');
    }
);

burger.addEventListener('click',

    function() 
    {
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
    if((event.target !== burger) && (event.target !== navBlock) && (event.target !== burgerBlock))
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

//SLIDER-ABOUT/////////////////////////////////////////////////

const sliderLine = document.querySelector('.about-images__content');
const dots = document.querySelectorAll('.pagination-item');
const prevButton = document.querySelector('.about-image__prev');
const nextButton = document.querySelector('.about-image__next');

let position = 0;
let dotIndex = 0;

const nextSlide = () => 
{
    if (position < ((dots.length - 1) * 475))
    {
        position += 475;
        dotIndex++;       
    }
        

    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
};

const prevSlide = () => 
{
    if (position > 0)
    {
        position -= 475;
        dotIndex--;
    }    
    
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);    
};

const thisSlide = (index) =>
{
    for (let dot of dots)
    {
        dot.querySelector('div').classList.remove('pagination-active');
        dot.classList.remove('pagination-item__desktop-active');
    }

    dots[index].querySelector('div').classList.add('pagination-active');
    dots[index].classList.add('pagination-item__desktop-active');

    nextButton.classList.remove('arrow-disabled');
    prevButton.classList.remove('arrow-disabled');

    if(index === 4)
        {
            nextButton.classList.add('arrow-disabled')
        }
        else
        {
            if(index === 0)
            {
                prevButton.classList.add('arrow-disabled')
            }
            else
            {
                nextButton.classList.remove('arrow-disabled');
                prevButton.classList.remove('arrow-disabled');
            }           
        }
};   

dots.forEach((dot, index) =>
{
    dot.addEventListener('click', () =>
    {
        position = 475 * index;
        sliderLine.style.left = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);      
    })
});

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

//----------Media (max-width: 768px)-----------------

if (window.matchMedia("(max-width: 768px)").matches) 
{
    
} 

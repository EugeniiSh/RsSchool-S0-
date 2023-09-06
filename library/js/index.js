console.log('Library part 1');
console.log('1.Вёрстка валидная +10(10)');
console.log('2.Вёрстка семантическая +16(16)');
console.log('3.Вёрстка соответствует макету +54(54)');
console.log('4.Общие требования к верстке +18(20) \n - плавная прокрутка по якорям -2. \n');

console.log('Library part 2');
console.log('1.Вёрстка соответствует макету. Ширина экрана 768px +26 (26)');
console.log('2.Нет горизонтальной прокрутки до 640px, \n контент страницы сохранется +12(12)');
console.log('3.На ширине экрана 768рх реализовано адаптивное меню +10 (12) \n - размеры открытого бургер-меню соответствуют макету -2');

console.log('Library part 3');
console.log('Этап 1: Пользователь не зарегистрирован');
console.log('- Ограниченная карусель в блоке About +25(25)');
console.log('- Слайдер в блоке Favorites +23(23)');
console.log('- До авторизации +2(2)');
console.log('Этап 2: Пользователь на этапе регистрации');
console.log('- Меню авторизации при нажатии на иконку пользователя +8(8)');
console.log('- Модальное окно REGISTER +29(29)');
console.log('- Окончание регистрации +8(8)');
console.log('- При наличии регистрации, но будучи не авторизованным +4(4)');
console.log('Этап 3: Пользователь на этапе входа в учётную запись после регистрации.');
console.log('- Модальное окно LOGIN +27(27)');
console.log('- Блок Favorites +2(2)');
console.log('Этап 4: Пользователь после входа в учётную запись');
console.log('- Меню профиля при нажатии на иконку с инициалами пользователя +16(16)');
console.log('- Модальное окно MY PROFILE +25(25)');
console.log('- Блок Favorites +6(6)');
console.log('- Модальное окно BUY A LIBRARY CARD +27(27)');
console.log('- Блок Digital Library Cards +2(2)');
console.log('--- ИНФОРМАЦИЯ О ПРОФИЛЕ НАХОДИТСЯ НИЖЕ ---');

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

//SLIDER-FAVORITES/////////////////////////////////////////////////

const radioInput = document.querySelectorAll('.block-radio');
const favoritesBookBlocks = document.querySelector('.favorites__book-blocks');
const winterSeason = document.querySelectorAll('.winter');
const springSeason = document.querySelectorAll('.spring');
const summerSeason = document.querySelectorAll('.summer');
const autumSeason = document.querySelectorAll('.autum');

radioInput.forEach((radio, index) =>
{
    radio.addEventListener('change', () =>
    {
        for (let bookBlocks of favoritesBookBlocks.querySelectorAll('div'))
        {
            bookBlocks.classList.remove('active__book');
        }


        switch(true)
        {
            case(index === 0):  
                for (let season of winterSeason)
                {
                    season.classList.add('active__book');
                }
            break;
            case(index === 1):  
                for (let season of springSeason)
                {
                    season.classList.add('active__book');
                }
            break;
            case(index === 2):  
                for (let season of summerSeason)
                {
                    season.classList.add('active__book');
                }
            break;
            case(index === 3):  
                for (let season of autumSeason)
                {
                    season.classList.add('active__book');
                }
            break;
        };
    })
});


//----------Media (max-width: 768px)-----------------

if (window.matchMedia("(max-width: 768px)").matches) 
{
    
} 

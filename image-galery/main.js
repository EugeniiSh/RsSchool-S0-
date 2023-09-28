console.log();
console.log('1.Вёрстка +10 (10)');
console.log('2.При загрузке приложения на странице отображаются полученные от API изображения +10 (10)');
console.log('3.Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10 (10)');
console.log('4.Поиск +30 (30)');
console.log('5.Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения.');
console.log('На усмотрение проверяющего.');

const apiKey = 'vFRyoip0ey8MbVSV4TeDyNEhm726HdL43ekbIXIUih4';
const urlRandom = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=10`;
const defaulUrlSearch = `https://api.unsplash.com/search/photos?page=1&query=programming&client_id=${apiKey}`;
const searchUrl = `https://api.unsplash.com/search/photos?page=1&query=`;

const headerForm = document.querySelector('.header-form');
const headerSearch = document.querySelector('.header-search');
const headerSearchCross = document.querySelector('.header-search__cross');

getImages(defaulUrlSearch);

async function getImages(url)
{
    try
    {
        // const response = await fetch(url,
        // {
        //     headers:
        //     {
        //         "Content-Type": "application/json",
        //         "X-API-KEY": apiKey,
        //     },
        // });
        // const data = await response.json();
        // console.log(data);
        // showImages(data);
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);

        if(data.results.length === 0)
        {
            const imagesEl = document.querySelector('.images');
            imagesEl.innerHTML = ''; //Очистка предыдущего запроса.

            const imageEl = document.createElement('div');
            imageEl.classList.add('wrong');
            imageEl.innerHTML = '<div>Something wrong. Try again</div>';
            imagesEl.appendChild(imageEl);
        }
        else
        {
            showImages(data)
        }
        
    }
    catch(error)
    {
        console.log(error);
    }
}



function showImages(data)
{
    const imagesEl = document.querySelector('.images');
    imagesEl.innerHTML = ''; //Очистка предыдущего запроса.

    data.results.forEach((content) => 
    {
        const imageEl = document.createElement('div');
        imageEl.classList.add('image-block');
        imageEl.innerHTML = `
        <div class="image-block__content">
            <div class="image-content">
                <img src="${content.urls.regular}" alt="image" class="image">
            </div>

            <div class="image-shadow"></div>
        </div>

        <div class="image-block__info">
            <div class="image-autor">${content.user.name}</div>
            <div class="image-name">${content.description || ''}</div>
            <div class="image-likes">${content.likes}</div>
        </div>`;
        imagesEl.appendChild(imageEl);
    })
}

headerForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const apiSearchUrl = `${searchUrl}${headerSearch.value}&client_id=${apiKey}`;
    if (headerSearch.value)
    {
        getImages(apiSearchUrl)
    }
});

headerSearchCross.addEventListener('click', () =>
{
    headerSearch.value = '';
});


// const button = document.querySelector('.btn'),
//       image = document.querySelector('.img-class'),
//       url = 'https://api.unsplash.com/photos/random?client_id=vFRyoip0ey8MbVSV4TeDyNEhm726HdL43ekbIXIUih4';


// async function fetchHandler()
// {
//     try
//     {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         image.src = data.urls.regular;
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// button.addEventListener('click', () => 
// {
//     let isLoaded = image.complete;
//     console.log(isLoaded);

//     if(isLoaded)
//     {
//         fetchHandler();
//     }
// });
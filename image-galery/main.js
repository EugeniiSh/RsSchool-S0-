const apiKey = 'vFRyoip0ey8MbVSV4TeDyNEhm726HdL43ekbIXIUih4';
const urlRandom = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=4`;
const urlSearch = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${apiKey}`;

async function getImages()
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
        const response = await fetch(urlSearch);
        const data = await response.json();
        console.log(data);
        showImages(data)
    }
    catch(error)
    {
        console.log(error);
    }
}

getImages();

function showImages(data)
{
    const imagesEl = document.querySelector('.images');

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
            <div class="image-autor">People</div>
            <div class="image-name">formr</div>
            <div class="image-likes">555</div>
        </div>`;
        imagesEl.appendChild(imageEl);
    })
}


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
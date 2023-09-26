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
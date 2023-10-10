
// ======================= GAME ==================================

const whoMove = document.querySelector('.who-move');
const gameArea = document.querySelector('.game-area');
const areaItem = document.querySelectorAll('.area-item');
const endGameResult = document.querySelector('.end-game-result');
const winnerText = document.querySelector('.winner-text');
const newGameBtn = document.querySelector('.new-game-btn');
const win = 
[
    [0,1,2],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

// width="35" height="55"
// width="33" height="47"
// width="33" height="57"
const crossesSvg = 
[
    '<svg id="Capa_5" width="35" height="55" viewBox="0 0 29 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="check5" stroke-dasharray= "0, 40" stroke-dashoffset="0" d="M2 8C5.23002 10.8711 6 12.9796 6 17.5C6 20.2891 11.5008 22.8651 13.2222 24.7778C17.4507 29.4761 22.0308 33.6872 27 37" stroke="black" stroke-width="3"><animate id="anu1" attributeName="stroke-dasharray" begin="0s" values="0, 40;40, 0" dur="0.5s" repeatCount="1"  fill="freeze"  calcMode="linear"/></path><path id="check6" stroke-dasharray= "0, 49" stroke-dashoffset="0" d="M23 2C21.6568 2.1679 21.2454 13.3749 20.5556 15.4444C19.0191 20.0537 18.2669 24.8159 16.9444 29.4444C15.9133 33.0536 11.343 34.8696 9.77778 38C8.23973 41.0761 6.34126 42.6587 4 45" stroke="black" stroke-width="3"><animate id="anu2" attributeName="stroke-dasharray" begin="0.5s" values="0, 49;49, 0" dur="0.5s" repeatCount="1"  fill="freeze"  calcMode="linear"/></path></svg>',
    '<svg width="33" height="47" viewBox="0 0 33 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke-dasharray= "0, 48" stroke-dashoffset="0" d="M1.80538 3.23663C1.98477 6.28619 4.74043 11.5275 6.86996 13.5049C10.6338 16.9999 13.9106 21.1377 16.8322 25.3872C18.7102 28.1189 21.8888 31.418 22.3142 34.8207C22.7655 38.4317 22.0955 40.8692 25.3473 43.3081" stroke="black" stroke-width="3"><animate id="anu1" attributeName="stroke-dasharray" begin="0s" values="0, 48;48, 0" dur="0.5s" repeatCount="1"  fill="freeze"  calcMode="linear"/></path><path stroke-dasharray= "0, 53" stroke-dashoffset="0" d="M31.3581 1.73396C27.9635 3.73076 27.6664 8.79678 26.6274 12.1971C25.2088 16.8398 23.4557 22.3645 20.1158 25.9716C14.2419 32.3154 8.92598 39.1928 2.80717 45.3116" stroke="black" stroke-width="3"><animate id="anu2" attributeName="stroke-dasharray" begin="0.5s" values="0, 53;53, 0" dur="0.5s" repeatCount="1"  fill="freeze"  calcMode="linear"/></path></svg>',
    '<svg width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke-dasharray= "0, 58" stroke-dashoffset="0" d="M27.3581 1.88573C27.3581 4.22743 26.0941 6.7459 24.8536 8.67561C23.5817 10.654 22.9682 12.6146 21.8482 14.6307C20.4244 17.1936 17.7338 18.9565 16.0601 21.4205C14.7826 23.3013 12.5345 24.8544 11.5521 26.8191C10.5105 28.9023 8.6195 30.4534 7.43365 32.5515C6.32072 34.5205 5.91034 36.8484 4.81788 38.8405C2.75264 42.6065 2.31342 48.6977 2.31342 52.9768" stroke="black" stroke-width="3"><animate id="anu1" attributeName="stroke-dasharray" begin="0s" values="0, 58;58, 0" dur="0.5s" repeatCount="1"  fill="freeze"  calcMode="linear"/></path><path stroke-dasharray= "0, 57" stroke-dashoffset="0" d="M2.31342 6.89465C6.4757 7.93522 10.1338 15.866 12.1087 19.083C15.9502 25.341 19.097 32.1506 23.3509 38.1448C25.1529 40.684 26.5746 43.1658 27.8589 46.0199C29.1347 48.8549 29.5608 52.5745 31.3652 54.9804" stroke="black" stroke-width="3"><animate id="anu2" attributeName="stroke-dasharray" begin="0.5s" values="0, 57;57, 0" dur="0.5s" repeatCount="1"  fill="freeze"  calcMode="linear"/></path></svg>'
];

// width="35" height="49"
// width="42" height="47"
// width="31" height="58"
const noughtsSvg =
[
    '<svg id="Capa_6" width="35" height="49" viewBox="0 0 35 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="check7" stroke-dasharray= "0, 131" stroke-dashoffset="0" d="M21 5C12.1205 9.17858 2 6.83714 2 20.0556C2 24.0128 0.974534 30.1815 3.55556 33.5C6.17046 36.862 7.35896 45.3732 13 46C16.3661 46.374 19.2739 47.3461 22.8889 46.9444C25.9103 46.6087 27.596 42.7778 30 41.2222C34.0801 38.5822 33.5933 27.6068 32.9444 23.3889C32.228 18.7318 29.8114 12.8257 27.8889 8.5C26.591 5.57976 25.7223 3.08334 22.2222 3C18.4269 2.90964 14.744 2 11 2" stroke="black" stroke-width="3"><animate id="p1" attributeName="stroke-dasharray" begin="0s" values="0, 131;131, 0" dur="1s" repeatCount="1"  fill="freeze"  calcMode="linear"/></path></svg>',
    '<svg width="42" height="47" viewBox="0 0 42 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke-dasharray= "0, 137" stroke-dashoffset="0" d="M8.49375 6.2527C6.67106 8.30323 5.44009 11.514 3.98572 13.8774C1.59205 17.7671 1.98214 22.8206 1.98214 27.1789C1.98214 30.2503 2.29573 32.3143 3.48482 35.1932C4.59567 37.8826 7.4949 39.1124 9.55119 41.0926C14.5463 45.9027 23.5039 45.723 29.893 45.2667C38.3131 44.6652 39.8549 31.5691 39.5213 25.064C39.3635 21.9865 38.1947 17.837 37.0168 14.9905C35.6195 11.6136 34.4882 7.42721 32.5366 4.36044C29.3916 -0.581642 23.3453 3.42256 20.543 6.22488C18.4948 8.2731 15.9924 9.97669 13.7253 11.7904C12.1116 13.0813 9.61484 15.0898 8.49375 16.7715" stroke="black" stroke-width="3"><animate id="p1" attributeName="stroke-dasharray" begin="0s" values="0, 137;137, 0" dur="1s" repeatCount="1"  fill="freeze"  calcMode="linear"/></path></svg>',
    '<svg width="31" height="58" viewBox="0 0 31 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke-dasharray= "0, 141" stroke-dashoffset="0" d="M1.49197 47.9554C2.25132 48.8096 2.0323 49.7313 3.10595 50.4598C4.9921 51.7397 7.33203 52.4462 9.50625 53.0756C12.4128 53.917 17.9064 56.647 20.9155 55.3574C23.3266 54.3241 24.7536 48.2097 25.4235 45.9518C26.5545 42.1399 27.5165 38.548 27.928 34.5982C28.5289 28.8291 30.4563 21.7125 28.8184 15.8982C27.6561 11.772 22.585 7.08085 19.2458 4.60031C17.3244 3.17293 14.3979 2.33149 12.0107 2.37412C3.71709 2.52222 2.70466 12.6372 2.10417 18.7923C1.4001 26.0089 1.99286 33.582 1.99286 40.8316C1.99286 42.6957 1.89484 44.5904 1.99286 46.4527C2.08412 48.1867 5.40973 50.3704 6.50089 51.4616" stroke="black" stroke-width="3"><animate id="p1" attributeName="stroke-dasharray" begin="0s" values="0, 141;141, 0" dur="1s" repeatCount="1"  fill="freeze"  calcMode="linear"/></path></svg>'
];

let step = '';
let winner = '';
let counter = 0;


getWhoMove ();


function getWhoMove ()
{
    if (step == 'crosses')
    {
        step = 'noughts';
        whoMove.textContent = 'Noughts';
    } 
    else 
    {
        step = 'crosses'
        whoMove.textContent = 'Crosses';
    }
}


function checkNoughtsWin ()
{
    for(let i = 0; i < win.length; i++)
    {
        if(
        areaItem[win[i][0]].classList.contains('noughts') &&
        areaItem[win[i][1]].classList.contains('noughts') &&
        areaItem[win[i][2]].classList.contains('noughts')
        )
        {
            areaItem[win[i][0]].classList.add('winColor')
            areaItem[win[i][1]].classList.add('winColor')
            areaItem[win[i][2]].classList.add('winColor')
            winner = "Noughts"
            getEndGame(winner)
            return 1;
        }
    }
}

function checkCrossesWin ()
{
    for(let i =0; i<win.length; i++)
    {
        if(
        areaItem[win[i][0]].classList.contains('crosses') &&
        areaItem[win[i][1]].classList.contains('crosses') &&
        areaItem[win[i][2]].classList.contains('crosses')
        ){
            areaItem[win[i][0]].classList.add('winColor')
            areaItem[win[i][1]].classList.add('winColor')
            areaItem[win[i][2]].classList.add('winColor')
            winner = "Сrosses"
            getEndGame(winner)
            return 1;
        }
    }
}

function checkGameDraw ()
{
    if (!checkCrossesWin() && !checkNoughtsWin() && (counter >=9)){
        winner = "Game Draw"
        getEndGame(winner)
    }
}

function getEndGame (winner)
{
    gameArea.style.pointerEvents = 'none';
    endGameResult.style.display = 'flex';
    winnerText.textContent = winner;
}

function getRandomNumber(maxNum)
{
    return Math.floor(Math.random() * maxNum);
}





areaItem.forEach((item)=>
{
    item.addEventListener('click',()=>
    {
        if(!item.classList.contains('noughts') && !item.classList.contains('crosses'))
        {
            item.classList.add(step);

            if (step=='crosses')
            {
                item.innerHTML = crossesSvg[getRandomNumber(crossesSvg.length)];
            }

            if (step=='noughts')
            {
                item.innerHTML = noughtsSvg[getRandomNumber(noughtsSvg.length)];
            }

            counter++;
            getWhoMove ();
            checkNoughtsWin ();
            checkCrossesWin ();
            checkGameDraw ();
        }
        
    })
})

newGameBtn.addEventListener('click',() =>
{
    document.location.reload()
})

// =====================================================
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// =================== AUDIO PLAYER =====================

const player = document.querySelector('.player'),
      prevBtn = document.querySelector('.prev'),
      playBtn = document.querySelector('.play'),
      nextBtn = document.querySelector('.next'),
      audioMusic = document.querySelector('.audio-music'),
      audioVoice = document.querySelector('.audio-voice'),

      
      imgSrc = document.querySelector('.img__src'),
      
      volumeImg = document.querySelector('.volume-img'),
      volumeSlider = document.querySelector('.volume-slider'),
      volumePercentage = document.querySelector('.volume-percentage')


// Названия песен
const songs = 
['harmonica-4',
'pianoBanjo-4',
'saloon-4'
];  

// Песня и громкость по умолчанию
let songIndex = 0;
audioMusic.volume = 0.02;
audioVoice.volume = 0.02;

// Init
function loadSong (song)
{
    // tittleContent.textContent = song;
    audioMusic.src = `assets/music/${song}.mp3`;
    // sliderImg.src = `assets/img/cover${songIndex + 1}.jpg`;
    // changeBgImage (songIndex);  
}

// function changeBgImage (songIndex)
// {
//     mainPage.style.opacity = '0.5';
//     mainPage.style.backgroundImage = `url(assets/img/bgi${songIndex + 1}.jpg)`;
//     setTimeout(getOpacityOne, 100,  mainPage);
// }

// function getOpacityOne (element)
// {
//     element.style.opacity = '1';
// }

audioMusic.addEventListener("loadeddata", () => 
{
    // totalTime.textContent = getTimeCodeFromNum(audio.duration);

    let newVolume;
    // audio.volume = 0.02;
    newVolume = audioMusic.volume;
    volumePercentage.style.width = newVolume * 100 + '%';
},
false);

loadSong (songs[songIndex]);

// Play
function playSong ()
{
    player.classList.add('plays');
    imgSrc.src = 'assets/img-player/pause.svg';
    audioMusic.play();
}

// Pause
function pauseSong ()
{
    player.classList.remove('plays');
    imgSrc.src = 'assets/img-player/play.svg';
    audioMusic.pause();
}

playBtn.addEventListener('click', () => 
{
    const isPlaing = player.classList.contains('plays');
    if (isPlaing)
    {
        pauseSong ();
    }
    else
    {
        playSong ();
    }
})

// Next song
function nextSong ()
{
    songIndex++;

    if (songIndex > songs.length - 1)
    {
        songIndex = 0;
    }

    loadSong (songs[songIndex]);
    playSong ();
}

nextBtn.addEventListener('click', nextSong);

// Prev song
function prevSong ()
{
    songIndex--;

    if (songIndex < 0)
    {
        songIndex = songs.length - 1;
    }

    loadSong (songs[songIndex]);
    playSong ();
}

prevBtn.addEventListener('click', prevSong);

// Progress Bar & Curent time
// function getTimeCodeFromNum(num) 
// {
//     let seconds = parseInt(num);
//     let minutes = parseInt(seconds / 60);
//     seconds -= minutes * 60;
//     const hours = parseInt(minutes / 60);
//     minutes -= hours * 60;
  
//     if (hours === 0)
//     {
//       return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
//     }  
    
//     return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
// }

// function updateProgress (e)
// {
//     const duration = e.srcElement.duration;
//     const currentTime = e.srcElement.currentTime;
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;

//     curentTime.textContent = getTimeCodeFromNum(audio.currentTime);
// }

// audio.addEventListener('timeupdate', updateProgress);

// Set Progress
// function setProgress(e)
// {
//     const width = this.clientWidth;
//     const clickX = e.offsetX;
//     const duration = audio.duration;

//     audio.currentTime = (clickX / width) * duration;
// }

// progressContainer.addEventListener('click', setProgress);

// Autoplay
audioMusic.addEventListener('ended', nextSong);

// Volume change
function changeVolume (e)
{
    const sliderWidtn = window.getComputedStyle(volumeSlider).width;
    const newVolume =  e.offsetX / parseInt(sliderWidtn);
    audioMusic.volume = newVolume;
    audioVoice.volume = newVolume;
    volumePercentage.style.width = newVolume * 100 + '%';
}

volumeSlider.addEventListener('click', changeVolume);

// Volume mute
function muteVolume ()
{
    audioMusic.muted = !audioMusic.muted;
    audioVoice.muted = !audioVoice.muted;
    if (audioMusic.muted && audioVoice.muted)
    {
        volumeImg.src = 'assets/img-player/volOff.svg';
    }
    else
    {
        volumeImg.src = 'assets/img-player/volOn.svg';
    }
}

volumeImg.addEventListener('click', muteVolume);


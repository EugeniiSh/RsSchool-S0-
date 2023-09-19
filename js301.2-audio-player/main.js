const player = document.querySelector('.player'),
      prevBtn = document.querySelector('.prev'),
      playBtn = document.querySelector('.play'),
      nextBtn = document.querySelector('.prev'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress-container'),
      progress = document.querySelector('.progress'),
      tittleContent = document.querySelector('.tittle-content'),
      sliderImg = document.querySelector('.slider-img'),
      imgSrc = document.querySelector('.img__src'),
      mainPage = document.querySelector('.main-page')

// Названия песен
const songs = 
['Gladys Knight & The Pips - The Look Of Love',
'Madonna - What It Feels Like For A Girl (vs Paul Oakenfold) (2001)',
'Маляр - Нокаутёр',
'Александр Градский - Лодка (из к.ф. Свой среди чужих, чужой среди своих)(музыка Э.Артемьева, слова Н.Кончаловской)'];  

// Песня по умолчанию
let songIndex = 0;

// Init
function loadSong (song)
{
    tittleContent.textContent = song;
    audio.src = `assets/audio/${song}.mp3`;
    sliderImg.src = `assets/img/cover${songIndex + 1}.jpg`;
    mainPage.style.backgroundImage = `url(assets/img/bgi${songIndex + 1}.jpg)`;
}

loadSong (songs[songIndex]);

// Play
function playSong ()
{
    player.classList.add('plays');
    imgSrc.src = 'assets/img/pause.svg';
    audio.play();
}

// Pause
function pauseSong ()
{
    player.classList.remove('plays');
    imgSrc.src = 'assets/img/play.svg';
    audio.pause();
}

playBtn.addEventListener('click', () => 
{
    const isPlaing = player.classList.contains('plays');
    if (isPlaing)
    {
        pauseSong ()
    }
    else
    {
        playSong ()
    }
})
const player = document.querySelector('.player'),
      prevBtn = document.querySelector('.prev'),
      playBtn = document.querySelector('.play'),
      nextBtn = document.querySelector('.next'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress-container'),
      progress = document.querySelector('.progress'),
      tittleContent = document.querySelector('.tittle-content'),
      sliderImg = document.querySelector('.slider-img'),
      imgSrc = document.querySelector('.img__src'),
      mainPage = document.querySelector('.main-page'),
      totalTime = document.querySelector('.total-time'),
      curentTime = document.querySelector('.curent-time'),
      volumeImg = document.querySelector('.volume-img'),
      volumeSlider = document.querySelector('.volume-slider'),
      volumePercentage = document.querySelector('.volume-percentage')


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

audio.addEventListener("loadeddata", () => 
{
    totalTime.textContent = getTimeCodeFromNum(audio.duration);

    let newVolume;
    audio.volume = 0.02;
    newVolume = audio.volume;
    volumePercentage.style.height = newVolume * 100 + '%';
},
false);

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
function getTimeCodeFromNum(num) 
{
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0)
    {
      return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    }  
    
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}

function updateProgress (e)
{
    const duration = e.srcElement.duration;
    const currentTime = e.srcElement.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    curentTime.textContent = getTimeCodeFromNum(audio.currentTime);
}

audio.addEventListener('timeupdate', updateProgress);

// Set Progress
function setProgress(e)
{
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener('click', setProgress);

// Autoplay
audio.addEventListener('ended', nextSong);

// Volume change
function changeVolume (e)
{
    const sliderHeight = window.getComputedStyle(volumeSlider).height;
    const newVolume = (parseInt(sliderHeight) - e.offsetY) / parseInt(sliderHeight);
    audio.volume = newVolume;
    volumePercentage.style.height = newVolume * 100 + '%';
}

volumeSlider.addEventListener('click', changeVolume);

// Volume mute
function muteVolume ()
{
    audio.muted = !audio.muted;
    if (audio.muted)
    {
        volumeImg.src = 'assets/img/volOff.svg';
    }
    else
    {
        volumeImg.src = 'assets/img/volOn.svg';
    }
}

volumeImg.addEventListener('click', muteVolume);






const image = document.getElementById('cover');
const title = document.getElementById('music-title');
const artist = document.getElementById('music-artist');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const playerProgrss = document.getElementById('player-progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');
const background = document.getElementById('bg-img');

const music = new Audio();

const songs =[
    {
     path: "assets/slowlife.mp3",
        displayName: "Slow Life",
        cover: "assets/p1.webp",
        artist: "Benjamin Lazzarus",
    },
    {
        path: "assets/yesterday.mp3",
        displayName: "Yesterday",
        cover: "assets/p2.webp",
        artist: "Hugo Dujardin",
    },
    {
        path: "assets/angelsbymyside.mp3",
        displayName: "Angels By My Side",
        cover: "assets/p3.webp",
        artist: "Lunar Years",
    },
    {
        path: "assets/firesidechat.mp3",
        displayName: "Fireside Chat",
        cover: "assets/p4.webp",
        artist: "Yunior Arronte",
    },
    {
        path: "assets/softvibes.mp3",
        displayName: "Soft Vibes",
        cover: "assets/p5.webp",
        artist: "Vital",
    },
    {
        path: "assets/happiness.mp3",
        displayName: "Happiness",
        cover: "assets/p6.webp",
        artist: "Benjamin Tissot",
    },
    {
        path: "assets/entenca.mp3",
        displayName: "Entenca",
        cover: "assets/p7.webp",
        artist: "Dreamt",
    },
    {
        path: "assets/anewbeginning.mp3",
        displayName: "A New Beginning",
        cover: "assets/p8.webp",
        artist: "Benjamin Tissot",
    },
    {
        path: "assets/downtown.mp3",
        displayName: "Downtoen",
        cover: "assets/p9.webp",
        artist: "Benjamin Tissot",
    },
      {
        path: "assets/inspire.mp3",
        displayName: "Inspire",
        cover: "assets/p10.webp",
        artist: "Benjamin Tissot",
    },
]

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;
    playBtn.classList.replace("fa-play","fa-pause");
    playBtn.setAttribute("title","pause");
    music.play();
}

function pauseMusic(){
    isPlaying = false;
    playBtn.classList.replace("fa-pause","fa-play");
    playBtn.setAttribute("title","pause");
    music.pause();
}
function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`

    const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;

}

function setProgressBar(e){
    const width = playerProgrss.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener("click",togglePlay);
prevBtn.addEventListener("click",()=>changeMusic(-1));
nextBtn.addEventListener("click",()=>changeMusic(1));
music.addEventListener("ended",()=>changeMusic(1));
playerProgrss.addEventListener("click",setProgressBar);
music.addEventListener("timeupdate",updateProgressBar);

loadMusic(songs[musicIndex])
let songIndex = 0;
let audioElement = new Audio('songs/5.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let SongCont = Array.from(document.getElementsByClassName('song-con'));
let coverImg = document.getElementById('cover-img');
let coverInfo = document.getElementById('r-song-info');

let songs = [
    { name: 'INDUSTRY BABY : Lil Nas X', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg' }
    , { name: 'In Da Club : 50 Cent', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg' }
    , { name: 'Mockingbird : Eminem', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg' }
    , { name: 'One Dance : Crake ft.L.V.', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg' }
    , { name: 'The Box : Robby Ricch', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg' }
    , { name: 'Bank Account : 21 Savage', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg' }
    , { name: 'Mask Off : future', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg' }
    , { name: 'Panda : Desiigner -Panda', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg' }
]

SongCont.forEach((element , i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('h4')[0].innerText= songs[i].name;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value / 100 * audioElement.duration;
});

SongCont.forEach((element, a ) => {
    element.addEventListener('click', () => {
        audioElement.src = songs[a].filePath;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        progressBar.value = 0;
        coverImg.src = songs[a].coverPath;
        coverInfo.innerText = songs[a].name;
    });
});
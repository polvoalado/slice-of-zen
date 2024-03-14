const songs = [
  "https://audio.jukehost.co.uk/Sa3fJ2syKJVdIjHObgNLMy5BvCvtYDiI",
  "https://audio.jukehost.co.uk/XkrYbTZgNqwTcpyEdD3VsO4i3I1ZngO8",
  "https://audio.jukehost.co.uk/huDwlcnGTx50g02VOMMxTH9MHHgPuToI",
  
];
const backgrounds = [
  "https://wallpaperaccess.com/full/390982.jpg",
  "https://media1.tenor.com/m/hy4tiWarPc4AAAAC/lotus-flower.gif",
  "https://media1.tenor.com/m/hirafO86yX0AAAAC/ena-wizard.gif",
  
];

let currentSongIndex = 0;

const playButton = document.getElementById("playButton");
const nextButton = document.getElementById("nextButton");
const audioPlayer = document.getElementById("audioPlayer");

playButton.addEventListener("click", togglePlay);
nextButton.addEventListener("click", playNextSong);

function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = "⏸️";
  } else {
    audioPlayer.pause();
    playButton.textContent = "▶️";
  }
}

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
  
  document.body.style.backgroundImage = `url('${backgrounds[currentSongIndex]}')`;
}
import React, { useState, useEffect } from 'react'
import App from './App'

interface Song {
  url: string
}

interface Background {
  url: string
}



const songs: Song[] = [
  { url: "https://audio.jukehost.co.uk/Sa3fJ2syKJVdIjHObgNLMy5BvCvtYDiI" },
  { url: "https://audio.jukehost.co.uk/XkrYbTZgNqwTcpyEdD3VsO4i3I1ZngO8" },
  { url: "https://audio.jukehost.co.uk/nOgVetif0otNTHrfl6AQyq9HjGuFo94Q"},
  { url: "https://audio.jukehost.co.uk/huDwlcnGTx50g02VOMMxTH9MHHgPuToI" },
  { url: "https://audio.jukehost.co.uk/5aLdKBc4bjknngm4ShocAmpf5qtmzMKJ"}
]

const backgrounds: Background[] = [
  { url: "https://wallpaperaccess.com/full/390982.jpg" },
  { url: "https://media1.tenor.com/m/hy4tiWarPc4AAAAC/lotus-flower.gif" },
  { url: "https://media1.tenor.com/m/8N7E2OBfIqgAAAAC/mcdonalds-aesthetic-mcdonalds.gif"},
  { url: "https://media1.tenor.com/m/hirafO86yX0AAAAC/ena-wizard.gif" },
  { url: "https://media1.tenor.com/m/VOdWjm2zbEAAAAAC/gandalf-sax-guy.gif"}
]

const SongPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0)
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState<number>(0)

  const playNextSong = () => {
    console.log("Next song button clicked")
    setCurrentSongIndex(prevIndex => {
      const newIndex = (prevIndex + 1) % songs.length
      console.log("New song index:", newIndex)
      return newIndex;
    });
    setCurrentBackgroundIndex(prevIndex => {
      const newIndex = (prevIndex + 1) % backgrounds.length
      console.log("New background index:", newIndex)
      return newIndex
    });
  };

  const togglePlay = () => {
    const audioPlayer = document.getElementById("audioPlayer") as HTMLAudioElement
    const playButton = document.getElementById("playButton") as HTMLButtonElement

    if (audioPlayer.paused) {
      audioPlayer.play()
      playButton.textContent = "⏸️"
    } else {
      audioPlayer.pause()
      playButton.textContent = "▶️"
    }
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex].url})`
  }, [currentBackgroundIndex])

  useEffect(() => {
    const audioPlayer = document.getElementById("audioPlayer") as HTMLAudioElement
    audioPlayer.load()
  }, [currentSongIndex])

  return (
    <div id="container">
      <button id="playButton" onClick={togglePlay}>▶️</button>
      <button id="nextButton" onClick={playNextSong}>⏭️</button>
      <audio id="audioPlayer" autoPlay>
        <source src={songs[currentSongIndex].url} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default SongPlayer

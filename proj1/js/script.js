// Get references to the audio element and the play/pause button
const audio = document.getElementById("myAudio");
const playPauseButton = document.getElementById("musicbtn");

// Add event listener to the button
playPauseButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "music_note";
  } else {
    audio.pause();
    playPauseButton.textContent = "music_off";
  }
});

//Theme event listener
var cgt = 1;
const themeChange = document.getElementById("changeTheme");
const video = document.getElementById("myVideo");
const project = document.getElementById("project");
const oContainer = document.getElementById("outer-container");

themeChange.addEventListener("click", function () {
  if (cgt == 0) {
    cgt = 1;
    themeChange.textContent = "wb_sunny";
    video.src = "../img/PARADISE.webm";
    project.classList.remove("projects-dark");
    project.classList.add("projects-light");
    oContainer.classList.add("container-light");
    oContainer.classList.remove("container-dark");
  }
  else {
    cgt = 0;
    themeChange.textContent = "dark_mode";
    video.src = "../img/Calming Ocean Full Moon Ambience - 12 Hours - 4K 60fps.webm";
    project.classList.remove("projects-light");
    project.classList.add("projects-dark");
    oContainer.classList.add("container-dark");
    oContainer.classList.remove("container-light");
  }
});

document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;
  let time = document.querySelector("#time").value;

  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray, time);
  }
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 500);
  }
}

function playComposition(songArray, time) {
  let wait = 0;
  let interval = parseInt(time);

  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);

    wait += interval;
  }
}

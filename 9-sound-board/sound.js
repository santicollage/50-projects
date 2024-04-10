const audioContainer = document.querySelector('.audio-container');
const buttonsContainer = document.querySelector('.buttons-container');

function stopAudio() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound.name);
    console.log(audio.currentTime);
      audio.pause();
      audio.currentTime = 0;
  });
}

// AUDIO TAGS
audioContainer.innerHTML = sounds.map(sound => `<audio src="${sound.url}" id="${sound.name}"></audio>`).join('');

// BUTTONS
sounds.forEach(sound => {
  const button = document.createElement('button');
  const audio = document.getElementById(sound.name);
  button.classList.add('button');
  button.innerText = sound.name;

  buttonsContainer.appendChild(button);

  setInterval(() => {
    if (audio.currentTime >= 15) {
      stopAudio();
    }
  },100);

  button.addEventListener('click', () => {
    stopAudio();
    audio.play();
  });
});
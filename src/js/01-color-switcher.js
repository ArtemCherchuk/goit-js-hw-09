function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

startBtn.addEventListener('click', () => {
  if ((document.querySelector('button[data-stop]').disabled = true)) {
    timerId = setInterval(() => {
      const color = getRandomHexColor();
      body.style.backgroundColor = color;
    }, 1000);
    document.querySelector('button[data-start]').disabled = true;
    document.querySelector('button[data-stop]').disabled = false;
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  document.querySelector('button[data-start]').disabled = false;
  document.querySelector('button[data-stop]').disabled = true;
});

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let colorId = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  setBodyColor();
  colorId = setInterval(setBodyColor, 1000);
}

function onStopBtnClick() {
  clearInterval(colorId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function setBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

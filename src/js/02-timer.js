import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const inputDateRef = document.querySelector('#datetime-picker');
const daysToStartRef = document.querySelector('[data-days]');
const hoursToStartRef = document.querySelector('[data-hours]');
const minutesToStartRef = document.querySelector('[data-minutes]');
const secondsToStartRef = document.querySelector('[data-seconds]');

let timeToStart;
let deadlineTime;
let timerId = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadlineTime = selectedDates[0];
    deadlineTime < options.defaultDate
      ? Notify.failure('Please choose a date in the future')
      : (startBtn.disabled = false);
  },
};

flatpickr(inputDateRef, options);

startBtn.addEventListener('click', onBtnClickStartTimer);

function onBtnClickStartTimer() {
  startBtn.disabled = true;
  inputDateRef.disabled = true;

  countdownTimer();

  timerId = setInterval(countdownTimer, 1000);
}

function countdownTimer() {
  timeToStart = deadlineTime - Date.now();

  if (timeToStart <= 0) {
    clearInterval(timerId);
    startBtn.disabled = false;
    inputDateRef.disabled = false;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeToStart);

  daysToStartRef.textContent = days;
  hoursToStartRef.textContent = hours;
  minutesToStartRef.textContent = minutes;
  secondsToStartRef.textContent = seconds;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

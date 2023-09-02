import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

btnStart.setAttribute('disabled', 'true');

const INTERVAL = 1000;
let timerId = null;
let futureTime = null;
let currentTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled', false);
      futureTime = selectedDates[0].getTime();
      Notiflix.Notify.success('Сorrect date selected');
    }
  },
};

const timer = {
  start() {
    timerId = setInterval(() => {
      inputEl.setAttribute('disabled', 'true');
      btnStart.setAttribute('disabled', 'true');
      currentTime = Date.now();
      const deltaTime = futureTime - currentTime;
      convertMs(deltaTime);
      onUpdatetimer(convertMs(deltaTime));
      if (deltaTime <= 1000) {
        this.stop();
      }
    }, INTERVAL);
  },
  stop() {
    clearInterval(timerId);
    Notiflix.Notify.success('Hooray, the sale is open!');
    return;
  },
};

function onStart() {
  timer.start();
}

function onUpdatetimer({ days, hours, minutes, seconds }) {
  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const flatpickr = flatpickr('#datetime-picker', options);
btnStart.addEventListener('click', onStart);

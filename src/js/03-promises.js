import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onClickSubmit(event) {
  console.log(event);
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;

  let delayEl = Number(delay.value);
  const stepEl = Number(step.value);
  const amountEl = Number(amount.value);
  // console.log(delayEl);

  for (let i = 1; i <= amountEl; i++) {
    delayEl += stepEl;
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }

  event.currentTarget.reset();
}
formEl.addEventListener('submit', onClickSubmit);

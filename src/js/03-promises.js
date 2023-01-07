import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
const submitBtn = document.querySelector('button');
const {
  elements: { delay, step, amount },
} = formRef;

submitBtn.addEventListener('click', onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault();

  for (
    let i = 1, delayTime = Number(delay.value);
    i <= Number(amount.value);
    i += 1, delayTime += Number(step.value)
  ) {
    createPromise(i, delayTime).then(onSuccess).catch(onError);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }

      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

function onSuccess(result) {
  Notify.success(result);
}

function onError(error) {
  Notify.failure(error);
}

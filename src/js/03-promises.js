import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
const submitBtn = document.querySelector('button');
const {
  elements: { delay, step, amount },
} = formRef;

submitBtn.addEventListener('click', onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault();

  const formData = {
    start: Number(delay.value),
    growth: Number(step.value),
    amt: Number(amount.value),
  };

  const { start, growth, amt } = formData;

  for (let i = 1, delayTime = start; i <= amt; i += 1, delayTime += growth) {
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

// function createPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       }

//       reject(`❌ Rejected promise ${position} in ${delay}ms`);
//     }, delay);
//   });

//   promise
//     .then(result => {
//       Notify.success(`${result}`);
//     })
//     .catch(error => {
//       Notify.failure(`${error}`);
//     });
// }

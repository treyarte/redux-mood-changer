const h6 = document.querySelector('h6');

const hapBtn = document.querySelector('#happy');
const angBtn = document.querySelector('#angry');
const evBtn = document.querySelector('#evil');
const scrBtn = document.querySelector('#scared');
const resetBtn = document.querySelector('#reset');

const type = 'CHANGE_MOOD';

const changeMood = (face) => {
  store.dispatch({ type, payload: face });
  const { mood } = store.getState();
  h6.innerText = mood;
};

hapBtn.addEventListener('click', () => {
  const { happy } = faces;
  changeMood(happy);
});

angBtn.addEventListener('click', () => {
  const { angry } = faces;
  changeMood(angry);
});

evBtn.addEventListener('click', () => {
  const { evil } = faces;
  changeMood(evil);
});

scrBtn.addEventListener('click', () => {
  const { scared } = faces;
  changeMood(scared);
});

resetBtn.addEventListener('click', () => {
  const { normal } = faces;
  changeMood(normal);
});

addEventListener;

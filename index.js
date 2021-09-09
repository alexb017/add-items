const list = document.querySelector('#list');
const modal = document.querySelector('#modal');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const btnAdd = document.querySelector('#addBtn');

const toggleModal = () => {
  modal.classList.toggle('show');
  if (modal.classList.contains('show')) {
    input.focus();
  } else {
    input.blur();
  }
};

btnAdd.addEventListener('click', toggleModal);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  toggleModal();
  input.blur();
  list.insertAdjacentHTML('afterbegin', `<li>${input.value}</li>`);
  input.value = '';
});

// close modal when press the 'Escape' key
document.addEventListener('keyup', (event) => {
  const key = event.key;
  if (key === 'Escape' && modal.classList.contains('show')) {
    toggleModal();
  }
});

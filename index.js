const list = document.querySelector('#list');
const modal = document.querySelector('#modal');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const btnAdd = document.querySelector('#addBtn');

const toggleModal = () => {
  modal.classList.toggle('show');
};

btnAdd.addEventListener('click', toggleModal);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  toggleModal();
  list.insertAdjacentHTML('beforeend', `<li>${input.value}</li>`);
  input.value = '';
});

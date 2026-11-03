const connectForm = document.querySelector('#connect-form');
const formStatus = document.querySelector('#form-status');

connectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thanks for reaching out. This demo did not send or store your information.';
});

connectForm.addEventListener('reset', () => {
  formStatus.textContent = '';
});

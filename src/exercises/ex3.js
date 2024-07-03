const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

function validateEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

emailForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = emailInput.value;

  if (validateEmail(email)) {
      validationMessage.textContent = 'Email is valid.';
      validationMessage.style.color = 'green';
  } else {
      validationMessage.textContent = 'Email is not valid.';
      validationMessage.style.color = 'red';
  }

  validationMessage.style.display = 'block';
});

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();
  validateEmail();
});
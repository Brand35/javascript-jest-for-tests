const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  message.textContent = 'You clicked the button!';
  // Your code here: Change the text content of the 'message' paragraph.
}

clickMeButton.addEventListener('click', showMessage);
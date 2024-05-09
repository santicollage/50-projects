const btn = document.querySelector('button');
const msContainer = document.querySelector('.notification-container');

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four', 'Message Five'];
const urgency = ['low-urgency', 'medium-urgency', 'high-urgency'];

btn.addEventListener('click', generateNotification);

function generateNotification() {
  const notification = document.createElement('div');
  notification.classList.add(random(urgency));
  notification.classList.add('message')
  notification.innerText = random(messages);

  msContainer.appendChild(notification);

  setTimeout(() => {notification.remove()}, 3000);
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
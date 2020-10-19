/* face*/
const user = document.querySelector('.user');
console.log(user);
const userButton = document.querySelector('#burger-menu');
console.log(userButton);
userButton.addEventListener('click', hideShow);
function hideShow() {
  if (user.classList.contains('is-active')) {
    user.classList.remove('is-active');
  } else {
    user.classList.add('is-active');
  }
}

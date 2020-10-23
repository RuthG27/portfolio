/* input search*/
const search = document.querySelector('.search-toolbar');
const button = document.querySelector('#input-menu');
button.addEventListener('click', showHide);
function showHide() {
  if (search.classList.contains('is-motion')) {
    search.classList.remove('is-motion');
  } else {
    search.classList.add('is-motion');
  }
}

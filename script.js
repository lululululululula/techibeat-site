const d = document;
const hamBurger = d.querySelector('.bi-list');
hamBurger.addEventListener('click', hamIconChange)

function hamIconChange() {
    if (hamBurger.classList.contains('bi-list')) {
        hamBurger.classList.remove('bi-list');
        hamBurger.classList.add('bi-x');
    } else if (hamBurger.classList.contains('bi-x')) {
        hamBurger.classList.remove('bi-x');
        hamBurger.classList.add("bi-list");
    }
}
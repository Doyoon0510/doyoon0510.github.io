import {$cat_list, cat} from '../module.mjs';
document.querySelector('title').innerText = document.getElementById('title').innerText;
for (let i = 0; i < cat.length; ++i) {
    $cat_list.innerHTML += `<a href="https://doyoon0510.github.io/?category=${i}"><li class="cat btn">${cat[i]}</li></a>`;
}
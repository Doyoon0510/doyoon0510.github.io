import {$cat_list, cat} from '../module.mjs';
const $cat = document.getElementById('cat');
$cat.setAttribute('href', `https://doyoon0510.github.io/?category=${$cat.innerText}`);
$cat.innerText = cat[$cat.innerText];
const a = 0;
for (let i = 0; i < cat.length; ++i) {
    $cat_list.innerHTML += `<a href="https://doyoon0510.github.io/?category=${i}"><li class="cat btn">${cat[i]}</li></a>`;
}
import {$cat_list, cats} from '../module.mjs';
const $cat = document.getElementById('cat');
$cat.setAttribute('href', `https://doyoon0510.github.io/?category=${$cat.innerText}`);
$cat.innerText = cats[$cat.innerText];
for (let i = 0; i < cats.length; ++i) {
    $cat_list.innerHTML += `<a href="https://doyoon0510.github.io/?category=${i}"><li class="cat btn">${cats[i]}</li></a>`; // 포스트의 카테고리 리스트 설정
}
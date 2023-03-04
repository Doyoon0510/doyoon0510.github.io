import {$cat_list, cat, fetchPost, postGenerate} from './module.mjs';

const urlParams = new URLSearchParams(window.location.search);
let select_cat = urlParams.get('category');
const $cat = document.getElementsByClassName('cat');

for (let i = 0; i < cat.length; ++i) {
    $cat_list.innerHTML += `<li class="cat btn">${cat[i]}</li>`;
}
console.log();
for (let i = 0; i < $cat.length; ++i) {
    $cat[i].addEventListener('click', function () {
        if ($cat[i].style.border === '4px solid var(--line2)') {
            fetchPost()
            .then(() => postGenerate())
            .catch(error => console.log(error));
            $cat[i].style.border = '';
            return;
        }
        for (let j = 0; j < $cat.length; ++j) {
            $cat[j].style.border = '';
        }
        $cat[i].style.border = '4px solid var(--line2)';
        fetchPost()
        .then(() => postGenerate(i))
        .catch(error => console.log(error));
        
    });
}
if (select_cat) {
    $cat[select_cat].style.border = '4px solid var(--line2)';
}
fetchPost()
.then(() => postGenerate(select_cat ?? -1))
.catch(error => console.log(error));
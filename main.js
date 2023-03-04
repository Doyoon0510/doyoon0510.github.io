import {cat} from './module.mjs';
const $option_list = document.getElementById('option-list');
let path = 0;
const $time = document.querySelector('time');
let date = $time?.getAttribute('datetime').split('-');
if (date) {
    $time.innerText = date[0] + '년 ' + date[1] + '월 ' + date[2] + '일 ';
}
if (window.location.pathname.split("/").pop() === 'index.html') {
    path = 'assets';
} else {
    path = '..';
    if (document.querySelector('title')) {
        document.querySelector('title').innerText = document.getElementById('title').innerText;
    }
    
}
$option_list.innerHTML = `
<li id="theme" class="option btn"><img src="${path}/imgs/light.png" width="20" height="20"/>Light</li>
<li id="sound" class="option btn">소리 끄기</li>
`
const root = document.documentElement;
const $btn = document.getElementsByClassName('btn');
const $theme = document.getElementById('theme');
const click_sound = new Audio(`${path}/sounds/1.mp3`);
let sound = true;
$theme.addEventListener('click', function () {
    if ($theme.innerText === "Light") {
        $theme.innerHTML = `<img src="${path}/imgs/dark.png" width="20" height="20"/>Dark`;
        document.documentElement.style.setProperty('--bg', '#ffcc5d');
        document.documentElement.style.setProperty('--bg2', '#241f00');
        document.documentElement.style.setProperty('--bg3', '#a78749');
        document.documentElement.style.setProperty('--bg4', '#454230');
        document.documentElement.style.setProperty('--line', '#fff');
        document.documentElement.style.setProperty('--line2', '#d18f00');
        document.documentElement.style.setProperty('--text', '#412f00');
        document.documentElement.style.setProperty('--text2', 'powderblue');
        document.documentElement.style.setProperty('--text3', 'white');
        /*
    --bg:  #ffcc5d;
    --bg2: #352e17;
    --bg3: #a78749;
    --line: #ffffff;
    --line2:  #d18f00;
    --text: #412f00;
    --text2: powderblue;
    --text3: #f0efe3;*/
    } else {
        $theme.innerHTML = `<img src="${path}/imgs/light.png" width="20" height="20"/>Light`;
        document.documentElement.style.setProperty('--bg', '#c7ac72');
        document.documentElement.style.setProperty('--bg2', '#3d3a2f');
        document.documentElement.style.setProperty('--bg3', '#d6cbb5');
        document.documentElement.style.setProperty('--bg4', 'rgb(255, 253, 248)');
        document.documentElement.style.setProperty('--line', '#fff');
        document.documentElement.style.setProperty('--line2', '#f3ede0');
        document.documentElement.style.setProperty('--text', '#f0efe3');
        document.documentElement.style.setProperty('--text2', 'rgb(255, 139, 118)');
        document.documentElement.style.setProperty('--text3', 'rgb(65, 47, 0)');
    }
});
document.getElementById('sound').addEventListener('click', function() {
    if (sound) {
        document.getElementById('sound').innerText = '소리 켜기';
    } else {
        document.getElementById('sound').innerText = '소리 끄기';
    }
    sound = !sound;
});
for (let i = 0; i < $btn.length; ++i) {
    $btn[i].addEventListener('click', function() { if (sound) {click_sound.play()}});
}
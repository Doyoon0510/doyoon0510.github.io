let post = {
    title: [],
    date: [],
    cat: [],
    content: [],
    link: []
  };
const cats = ['짧은 글', '긴 글', '수학'];
const $cat_list = document.getElementById('cat-list');
  function fetchPost(i = 0, xhr = new XMLHttpRequest()) {
    return new Promise((resolve, reject) => {
      xhr.open('HEAD', `assets/posts/${i}.html`, true); // HEAD 요청으로 파일 존재 여부 확인
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // 요청 완료
          if (xhr.status === 200) { // 파일 존재
            // 파일이 존재하는 경우 fetch() 메서드를 사용하여 파일 내용 가져오기
            fetch(`assets/posts/${i}.html`)
              .then(response => response.text())
              .then(data => {
                // HTML 파일 파싱
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
  
                // 원하는 요소 선택
                post.title[i] = htmlDoc.getElementById('title').innerText;
                post.date[i] = htmlDoc.querySelector('time').getAttribute('datetime');
                post.cat[i] = htmlDoc.getElementById('cat').innerText.split(',');
                post.content[i] = htmlDoc.querySelector('main p').innerText;
                post.link[i] = `${i}.html`;
                // 다음 포스트 가져오기
                resolve(fetchPost(i + 1, xhr));
              })
              .catch(error => reject(error));
          } else {
            resolve();
          }
        }
      };
      xhr.send(null); // 요청 보내기
    });
  }
  
  function postGenerate(cat = -1, $post_list = document.getElementById('post-list')) {
    let post_cats = '';
    let correct_post = false;
    $post_list.innerHTML = '';
    for (let i = 0; i < post.title.length; ++i) {
      post_cats = '';
      correct_post = false;
      for (const j of post.cat[i]) {
        post_cats += `<a id="cat" href="${`https://doyoon0510.github.io/?category=${j}`}">${cats[j]}</a>`;
        if (cat ===  parseInt(j)) {
          correct_post = true;
        }
      }
      if (cat === -1 || correct_post) {
        if (cat === -1) {
          document.getElementById('curt-cat').innerText = '전체 포스트';
        } else {
          document.getElementById('curt-cat').innerText = cats[cat];
        }
        $post_list.innerHTML += `
        <li class="post">
          <a href="assets/posts/${post.link[i]}"><h1 class="post-title">${post.title[i]}</h1></a>
          <time datetime="${post.date[i]}">${post.date[i]}</time>
          ${post_cats}
          <p>${post.content[i]}</p>
        </li>
      `;
      }
    }
  }

  export { $cat_list, cats, post, fetchPost, postGenerate };
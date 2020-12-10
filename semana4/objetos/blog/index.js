let post = {
  titulo: ``,
  autor: ``,
  img: ``,
  conteudo: ``
}

let posts = [];

function newPost() {
  post.titulo = document.getElementById('titulo-post').value;
  post.autor = document.getElementById('autor-post').value;
  post.img = document.getElementById('img-post').value;
  post.conteudo = document.getElementById('conteudo-post').value;

  posts.push(post);
  console.log(posts);

  let feed = document.getElementById('container-de-posts');
  feed.innerHTML += `<div class="post"><h2 class="title">${post.titulo}
  </h2><h3 class="autor">${post.autor}</h3><p class="conteudo">${post.conteudo}
  </p><img src=${post.img}></div>`;
  window.open(`./postPage.html`)
}

function loadPost() {
  let feed = document.getElementById('container-de-posts');
  console.log(posts);
  //feed.innerHTML += `<div class="post"><h2 class="title">${post.titulo}
  //</h2><h3 class="autor">${post.autor}</h3><p class="conteudo">${post.conteudo}
  //</p><img src=${post.img}></div>`;
}
type post = {
  autor: string;
  texto: string;
};

const post1: post = {
  autor: "alguem",
  texto: "alguma coisa",
};

const post2: post = {
  autor: "a",
  texto: "aaaa",
};

const post3: post = {
  autor: "b",
  texto: "bbbb",
};

const arrayPosts: post[] = [post1, post2, post3];

function buscarPostsPorAutor(posts: post[], autorInformado: string): post[] {
  return posts.filter((post) => {
    return post.autor === autorInformado;
  });
}

console.log(buscarPostsPorAutor(arrayPosts, "b"));

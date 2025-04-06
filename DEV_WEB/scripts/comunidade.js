const postContent = document.querySelector('content');
const Postar = document.querySelector('#Postar');
const inputPost = document.querySelector('#inputPost');

function criarPost() {

  console.log('Post criado!');

    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <div class="post-header">
            <h3>Nome do Usuário</h3>
            <span class="data-post">Data do Post</span>
        </div>
        <div class="post-content">
            <p>${inputPost.value}</p>
        </div>
        <button class="btn-comentar">Comentar</button>
        <div class="comentarios"></div>
    `;
    postContent.appendChild(post);
    inputPost.value = '';
}
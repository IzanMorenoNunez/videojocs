async function cargarposts() {
    try {
      const response = await fetch('https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      const usuarios = data.data;

      const postsContainers = document.getElementById('posts-container');
      postsContainers.innerHTML = '';

      usuarios.forEach((usuario, index) => {
        const div = document.createElement('div');
        div.className = 'post-item';
        div.innerHTML = ` ${usuario.title} : <br> ${usuario.content}`;
        postsContainers.appendChild(div);
      });
    } catch (error) {
      const postsContainers = document.getElementById('posts-container');
      postsContainers.innerHTML = '<p class="text-red-300">Error al carregar el post.</p>';
    }
  }

  document.addEventListener('DOMContentLoaded', cargarposts);
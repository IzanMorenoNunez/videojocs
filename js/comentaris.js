document.getElementById('comments-post-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById('nombre').value,
      content: document.getElementById('comentario').value,
      api_token: "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS"
    };
    const response = await fetch('https://phpstack-1076337-5399863.cloudwaysapps.com/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    document.getElementById('comments-post-form').reset();
    obtenerComentarios();
  });

  async function obtenerComentarios() {
    const response = await fetch('https://phpstack-1076337-5399863.cloudwaysapps.com/api/comments/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    const comentarios = data.data;
    const container = document.getElementById('comments-container');
    container.innerHTML = '';
    comentarios.forEach(comentario => {
      const div = document.createElement('div');
      div.className = 'comment-item';
      div.innerHTML = `<b>${comentario.name}</b>: ${comentario.content}`;
      container.appendChild(div);
    });
  }

  document.addEventListener('DOMContentLoaded', obtenerComentarios);
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

      const postsContainer = document.getElementById('posts-container');
      postsContainer.innerHTML = '';

      usuarios.forEach((usuario, index) => {
          const div = document.createElement('div');
          div.className = 'post-item bg-gray-600 p-4 rounded-md hover:bg-gray-500 transition animate-fade-in';
          div.style.animationDelay = `${index * 0.2}s`;
          div.innerHTML = `
              <h3 class="text-lg sm:text-xl font-bold text-white">${usuario.title}</h3>
              <p class="text-sm sm:text-base text-gray-300 mt-2">${usuario.content}</p>
              <div class="text-center mt-3">
                  <a href="#" class="inline-block text-blue-500 hover:text-blue-400 text-sm sm:text-base">Llegir més</a>
              </div>
          `;
          postsContainer.appendChild(div);
      });
  } catch (error) {}
}

document.addEventListener('DOMContentLoaded', cargarposts);
async function cargarRanking() {
      try {
        const response = await fetch('https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();

        const usuarios = data.data;

        const rankingContainer = document.getElementById('ranking-container');
        rankingContainer.innerHTML = '';

        usuarios.forEach((usuario, index) => {
          const div = document.createElement('div');
          div.className = 'ranking-item';
          div.innerHTML = ` ${usuario.name} - ${usuario.puntuacion} punts`;
          rankingContainer.appendChild(div);
        });
      } catch (error) {
        const rankingContainer = document.getElementById('ranking-container');
        rankingContainer.innerHTML = '<p class="text-red-300">Error al carregar el rànquing.</p>';
      }
    }
    
    document.addEventListener('DOMContentLoaded', cargarRanking);
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
        rankingContainer.innerHTML = `
            <div class="ranking-header flex justify-between bg-gray-700 text-white font-bold p-3 rounded-md mb-2">
                <span class="position flex-1 text-center text-sm sm:text-base">Pos</span>
                <span class="name flex-[2] text-center text-sm sm:text-base">Nom</span>
                <span class="score flex-1 text-center text-sm sm:text-base">Punts</span>
            </div>
        `;

        usuarios.forEach((usuario, index) => {
            const div = document.createElement('div');
            div.className = 'ranking-item flex justify-between bg-gray-600 p-3 rounded-md mb-2 hover:bg-gray-500 transition';
            div.innerHTML = `
                <span class="position flex-1 text-center text-sm sm:text-base">${index + 1}</span>
                <span class="name flex-[2] text-center text-sm sm:text-base">${usuario.name}</span>
                <span class="score flex-1 text-center text-sm sm:text-base">${usuario.puntuacion}</span>
            `;
            rankingContainer.appendChild(div);
        });
    } catch (error) {
        const rankingContainer = document.getElementById('ranking-container');
        rankingContainer.innerHTML = `
            <div class="ranking-header flex justify-between bg-gray-700 text-white font-bold p-3 rounded-md mb-2">
                <span class="position flex-1 text-center text-sm sm:text-base">Pos</span>
                <span class="name flex-[2] text-center text-sm sm:text-base">Nom</span>
                <span class="score flex-1 text-center text-sm sm:text-base">Punts</span>
            </div>
            <p class="text-red-300 text-center text-sm sm:text-base">Error al carregar el rànquing.</p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', cargarRanking);
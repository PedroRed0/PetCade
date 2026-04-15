let map;

function initMap() {
    map = L.map('map').setView([-23.5505, -46.6333], 13); // São Paulo como centro inicial

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const pets = listarPets();

    pets.forEach(pet => {
        const marker = L.marker([pet.ultimaLocalizacao.lat, pet.ultimaLocalizacao.lng]).addTo(map);
        
        marker.bindPopup(`
            <div class="text-center">
                <img src="${pet.foto}" style="width:180px; height:120px; object-fit:cover; border-radius:8px; margin:0 auto 8px;">
                <strong>${pet.nome}</strong><br>
                ${pet.especie} • ${pet.raca}<br>
                ${pet.recompensa > 0 ? `<span class="text-amber-600">Recompensa: R$ ${pet.recompensa}</span><br>` : ''}
                <small>${pet.descricao.substring(0, 80)}...</small>
            </div>
        `);
    });
}

window.onload = initMap;
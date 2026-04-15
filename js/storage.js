let pets = JSON.parse(localStorage.getItem('pets')) || [];

// Salvar pet
function salvarPet(pet) {
    pets.unshift(pet);
    localStorage.setItem('pets', JSON.stringify(pets));
}

// Listar todos
function listarPets() {
    return pets;
}

// Exemplo inicial (só na primeira vez)
if (pets.length === 0) {
    salvarPet({
        id: Date.now(),
        foto: "https://picsum.photos/id/1015/600/400",
        nome: "Luna",
        especie: "Cachorro",
        raca: "Vira-lata",
        descricao: "Fêmea, pelagem branca com manchas pretas, coleira vermelha. Muito dócil.",
        ultimaLocalizacao: { lat: -23.5505, lng: -46.6333 },
        recompensa: 300,
        data: new Date().toISOString()
    });
}
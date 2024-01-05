async function getCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const characters = await response.json();
        console.log(characters);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

getCharacters();

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

function toFilterStreamers() {
    const filterInput = document.getElementById('filterInput');
    const enteredWord = filterInput.value.toLowerCase();
    const filterStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(enteredWord));

    console.log(filterStreamers);
}

document.getElementById('filterInputButton').addEventListener('click', toFilterStreamers);

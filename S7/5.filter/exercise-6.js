const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const filterStreamers = streamers

.filter(streamer => streamer.gameMorePlayed.includes('Legends'))
.map(streamer => ({
    ...streamer,
    gameMorePlayed: streamer.age > 35 ? streamer.gameMorePlayed.toUpperCase() : streamer.gameMorePlayed
  }));

console.log(filterStreamers);
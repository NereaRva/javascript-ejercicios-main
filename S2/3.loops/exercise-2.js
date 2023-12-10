const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const data in alien) {
    if (Object.hasOwnProperty.call(alien, data)) {
        const datasAlien = alien[data];
        console.log(datasAlien)
    }
}
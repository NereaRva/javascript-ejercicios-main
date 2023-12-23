const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' };
}

const { name, race } = animalFunction();

console.log('Name:', name);
console.log('Race:', race);

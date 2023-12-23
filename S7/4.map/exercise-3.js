const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const nameCities = cities.map(city => city.name)
   
for (let id = 0; id < cities.length; id++) {
    const visitedCities = cities.map(city=>city.isVisited==true)
    if (visitedCities[id] == true) {
    console.log(cities[id].name);    
    cities[id].name += " (visitado)"
    }    
}
console.log(cities);

const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];
 
const movie2010 = movies.find(movie => movie.date === 2010)

console.log(movie2010);
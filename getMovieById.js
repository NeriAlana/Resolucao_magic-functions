const movies = require("../data/movies");

function getMovieById(id) {
 
    let movie = movies.find((movie) => movie.id === id);
    return movie    
}

module.exports = {
  getMovieById
}

console.log(getMovieById(3));

const movies = require("../data/movies");

function moviesWithActor(ator) {

    let actor = movies.filter((movie) => movie.elenco.includes(ator));   
      return actor;
}

module.exports = {
  moviesWithActor
}
console.log(moviesWithActor("Robert Downey Jr."));

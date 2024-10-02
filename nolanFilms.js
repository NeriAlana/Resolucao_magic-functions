const movies = require("../data/movies");

const nolanFilms = (movies) => {
    let nolan = movies.filter((movie) => 
      movie.diretor == "Christopher Nolan").sort((a,b) => 
      b.avaliacao - a.avaliacao);
    return nolan; 
}

module.exports = {
  nolanFilms
}
console.log(nolanFilms(movies));

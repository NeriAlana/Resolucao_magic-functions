const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
if (movies.length === 0) return undefined;

let best = movies[0];

let estrela = movies.find((movie) => {
  if (movie.avaliacao > best.avaliacao) {
    best = movie; 
  }
});
  return best;
}

module.exports = {
  bestRatedFilm
}

console.log(bestRatedFilm(movies));

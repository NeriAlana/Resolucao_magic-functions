const movies = require("../data/movies");

const filmSorted = (movies) => {
  let ordem = movies.sort((a, b) => a.anoLancamento - b.anoLancamento)
   .map((movie) => {
     return movie;
   })
   return ordem;
}

module.exports = {
  filmSorted
}

console.log(filmSorted(movies));

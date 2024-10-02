const movies = require("../data/movies");


const findActorForTheMovie = (titulo) => {
  if (!titulo || titulo.trim() === '' || titulo === null || titulo === undefined) {
    return  "Filme não encontrado."
  }
    
  let movieTitle = movies.find((movieTitle) => 
  movieTitle.titulo === titulo)

  if (!movieTitle || !movieTitle.elenco || movieTitle.elenco.length === 0 ) {
    return  "Filme não encontrado."
  }
  let elenco = movieTitle.elenco.slice(0,2);
    return elenco;
  }


module.exports = {
  findActorForTheMovie
}
console.log(findActorForTheMovie("Cidade de Deus"));

//"Alexandre Rodrigues", "Leandro Firmino"]

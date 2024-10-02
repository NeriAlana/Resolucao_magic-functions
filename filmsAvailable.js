const movies = require("../data/movies");

const filmsAvailable = (movies) => {
    let livre = movies.filter((movie) => movie.disponivel == true)
    .map((movie) => movie.titulo)  
    return livre;
    
}

module.exports = {
  filmsAvailable
}

console.log(filmsAvailable(movies));

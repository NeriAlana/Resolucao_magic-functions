const { list1 } = require("../data/list1");
const movies = require("../data/movies");

const getAllTitles = (movies) => {
    let filtrar = movies.filter((movie) => movie.titulo)
    .map((movie) => movie.titulo);
    return filtrar;  // Retornar um array com os títulos dos filmes
    
}

module.exports = {
  getAllTitles
}
console.log(getAllTitles(movies));

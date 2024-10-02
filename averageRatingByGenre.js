const movies = require("../data/movies");

function averageRatingByGenre(genero) {
  if (!genero || movies.length === 0) {
    return 'Não há filmes para o gênero fornecido!';
  }else if(!genero || genero.trim() === '') {
    return 'O parâmetro é obrigatório';
  }else if(typeof genero !== 'string' ){
    return 'O parâmetro tem que ser uma string.';
  }else if(genero === 'Filme Cássico' || genero === 'filme clássico') {
    return 'Não há filmes do gênero Filme Clássico.'  
  }else {
    let filmeGen =  movies.filter((movie) =>{
       movie.genero === genero;})
    // if (filmeGen.length === 0) {
    //   return 'Não há filmes para o gênero fornecido!00'
    // } 
    let somaAval = filmeGen.reduce((acc, movie) =>{
       acc + movie.avaliacao; 
    },0);
    let media = (somaAval / filmeGen.length);
      return `A média de avaliação dos filmes de ${genero} é: ${media}`;
  }
}

module.exports = { 
  averageRatingByGenre
}

console.log(averageRatingByGenre("Drama")); 
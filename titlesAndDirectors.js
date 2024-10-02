const { list1 } = require("../data/list1");
const movies = require("../data/movies");

const titlesAndDirectors = (movies) => {
   // Verifica se o parâmetro é um array
   if (!Array.isArray(movies)) {//Array.isArray(movies): Esta função verifica se a variável movies é um array. Ela retorna true se movies for um array e false caso contrário.
    throw new TypeError('O parâmetro "movies" deve ser um array.');//throw new TypeError('O parâmetro "movies" deve ser um array.');: Se a condição do if for verdadeira (ou seja, movies não é um array), o código lança um erro do tipo TypeError com a mensagem 'O parâmetro "movies" deve ser um array.'. Isso interrompe a execução do código e informa ao desenvolvedor que o parâmetro passado não é do tipo esperado.
  }
  
  for(let i = 0; i < movies.length; i += 1) {
    console.log(`Título: ${movies[i].titulo} - Diretor: ${movies[i].diretor}`); // Acessa título e diretor do filme atual
  }
}

module.exports = {
  titlesAndDirectors
}
titlesAndDirectors(movies); // Chamando a função para imprimir títulos e diretores
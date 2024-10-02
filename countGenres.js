const movies = require("../data/movies");

function countGenres(movies) {
  if (movies.length === 0){
    return {};
  }
 // Acessa o array de gêneros de cada filme
  let ocorrencia = movies.reduce((acc, movie) => {
    movie.genero.forEach((genero) => {
      acc[genero] = (acc[genero] || 0) + 1;// Conta cada ocorrência de gênero e se o gÊnero ainda n foi contado, ele é contabilizado como 1
    });
      return acc;
    }, {});// Inicializa o acumulador como um objeto vazio
    return ocorrencia;
  
}

module.exports = {
  countGenres
}

console.log(countGenres(movies));


//O que faz: Para cada filme, o código acessa a matriz de gêneros 
//( movie.genero). Como um filme pode ter múltiplos gêneros 
//(por exemplo, "Ação", "Drama"), é necessário iterar sobre esse 
//array usando forEach().
//Por quê: O forEach()permite que você percorra todos os gêneros do/
//filme. O código precisa somar a contagem de cada gênero individualmente,
//e forEach()ajuda a acessar cada um deles separadamente.


// O que faz: Atualiza a contagem de cada gênero no objeto acc.
// Por quê: Aqui, o código verifica se o gênero já existe no acumulador 
//acc. A expressão (acc[genero] || 0)faz o seguinte:
// Se acc[genero]já tiver um valor (ou seja, o gênero já foi contado 
//anteriormente), ele usa esse valor.
// Se acc[genero]ainda não existir (ou seja, o gênero ainda não foi 
//encontrado antes), o valor padrão será 0.
// Depois, soma 1à contagem e atualiza o valor em acc[genero]. 
//Assim, cada vez que o gênero aparece em um filme, sua contagem é 
//incrementada em 1
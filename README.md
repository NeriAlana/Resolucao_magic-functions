
# Repositório do projeto Magic Functions!


# Requisitos

## 1. Implemente a função `getAllTitles`

<details>
  <summary>
  A função getAllTitles é responsável por recuperar um array de títulos de filmes a partir de uma lista de filmes fornecida.
  </summary> <br />

- Faça com que a função `getAllTitles` possa receber vários parâmetros;

- Retorne um array de títulos de filmes quando a função é chamada com entrada válida.;

- Retorne um array vazio quando a função é chamada com um array de entrada vazio.

**O que será testado:**

Caso receba um array de filmes por ex:
 <code>[  {
    id: 1,
    titulo: "Cidade de Deus",
    diretor: "Fernando Meirelles",
    genero: ["Drama", "Crime"],
    ...
   },
   {
    id: 2,
    titulo: "Jogos Mortais",
    diretor: "James Wan",
    genero: ["Terror", "Suspense"],
    ...
   }
   ...
  ]
  </code>

  Exemplo de saída:

  <code>["Cidade de Deus", "Jogos Mortais", ...] </code>

</details>

---

## 2. Implemente a função `getMovieById`

<details>
  <summary>
  A função getMovieById é responsável por recuperar o objeto de filme com o ID fornecido.
  </summary> <br />

- A função recebe o parâmetro `id`: que representa o id do filme a ser pesquisado.

- Utilize diretamente na função os filmes que vem no array de objetos que se encontra dentro do arquivo

- Retorne o objeto completo do filme com o ID fornecido. O objeto retornado deve ser igual ao filme correspondente no array de filmes.

- Deve retornar undefined se nenhum filme com o ID fornecido for encontrado.

- Deve retornar undefined se o parâmetro de ID não for fornecido.

- Deve retornar undefined se o parâmetro de ID não for um número.

- Deve retornar undefined se o parâmetro de ID não for fornecido.

**O que será testado:**

- Ao passar um ID de um filme é retornado o objeto respectivamente de ID

</details>

---

## 3. Implemente a função `moviesWithActor`

<details>
  <summary>
    Encontre filmes que incluam um determinado ator em seu elenco.
  </summary> <br />

- A função recebe o parâmetro `actor`: Uma string que representa o nome do ator a ser pesquisado.

- Utilize diretamente na função os filmes que vem no array de objetos que se encontra dentro do arquivo

- Retorne uma lista de objetos de filmes que representam os filmes que incluem o ator dado. Se nenhum filme corresponder aos critérios, um array vazio será retornada.

**O que será testado:**

- A função deve pesquisar em uma coleção de filmes e suas informações de elenco associadas.
  Deve identificar filmes que possuem o ator especificado em seu elenco.
  Deve retornar um array contendo esses filmes correspondentes.
	
</details>

---

## 4. Implemente a função `bestRatedFilm`

<details>
  <summary>
    Encontre o filme com a classificação mais alta em uma lista de filmes.
  </summary> <br />

  - Recebe o parâmetro `movies`: Uma lista de objetos de filmes, onde cada objeto possui uma propriedade `rating` que representa a classificação do filme.

  - Retorna o filme com a classificação mais alta na lista. Se a lista estiver vazia, retorna `undefined`

  **O que será testado:**

  - Se houver vários filmes com a classificação mais alta quando fornecida uma lista de filmes com classificações válidas, a função deve retornar o primeiro filme encontrado na lista.

  - Se a lista estiver vazia, a função deve retornar `undefined`

</details>

---

## 5. Implemente a função `titlesAndDirectors`

<details>
  <summary>
    Imprima os títulos e diretores de cada filme em uma lista de filmes.
  </summary> <br />

- Recebe o parâmetro `movies` que é um array contendo a lista de filmes 

**O que será testado:**

- A função deve iterar pelo array de filmes e imprimir no console o título e o diretor de cada filme no formato `"Título: {título} - Diretor: {diretor}"`.
  Deve lidar com diferentes cenários de entrada:
  Listas vazias não devem produzir nenhuma saída.
  Listas com um único filme devem imprimir as informações desse filme.

</details>

---

## 6. Implemente a função `filmSorted`

<details>
  <summary>
    Ordene uma lista de filmes de acordo com o ano de lançamento
  </summary> <br />

- Recebe o parâmetro `movies` que é um array contendo a lista de filmes

- Retorne uma nova lista de filmes ordenada pelo ano de lançamento, em ordem crescente.

**O que será testado:**

- A função deve criar um novo array de filmes ordenada pelo ano de lançamento.
  Não deve modificar o array original de filmes que foi fornecida como entrada.
  Deve lidar com diferentes cenários de entrada:
   array vazios devem resultar em array vazios.


</details>

---

## 7. Implemente a função `filmsAvailable`

<details>
  <summary>
    Filtrar uma lista de filmes e retornar apenas os títulos dos filmes que estão disponíveis, com base na propriedade disponivel de cada objeto de filme.
  </summary> <br />

- Recebe o parâmetro `movies` que é um array contendo a lista de filmes

- Retorna uma array de títulos de filmes disponíveis, onde cada título é uma string.

**O que será testado:**
- Identificar os filmes que possuem a propriedade disponivel como true.
  Deve criar um novo array contendo apenas os títulos desses filmes disponíveis.
  Deve lidar com diferentes cenários de entrada:
  array vazios devem resultar em array vazios.
  array com todos os filmes indisponíveis devem resultar em array vazios.
</details>

---

## 8. Implemente a função `nolanFilms`

<details>
  <summary>
    Filtrar e ordenar uma lista de filmes, retornando apenas os filmes dirigidos por Christopher Nolan, ordenados pela classificação em ordem decrescente.
  </summary> <br />

  - Recebe o parâmetro `movies` que é um array contendo a lista de filmes

  - Deve filtrar, mantendo apenas esses filmes dirigidos por Nolan.

  - Deve classificar o array filtrado pela propriedade avaliacao em ordem decrescente.

  - Deve retornar o array ordenado.

**O que será testado:**

- Retorne um novo array contendo apenas os filmes dirigidos por Christopher Nolan, ordenados pela classificação em ordem decrescente.

</details>

---

## 9. Implemente a função `findActorForTheMovie`

<details>
  <summary>
    Encontre os dois primeiros atores no elenco de um filme, dada uma string representando o título do filme.
  </summary> <br />

- Utilize diretamente na função os filmes que vem no array de objetos que se encontra dentro do arquivo

- Recebe o parâmetro `movieTitle`: Uma string representando o título do filme.

- Retorne um array contendo os dois primeiros nomes de atores do elenco do filme, ou uma mensagem de erro caso o filme não seja encontrado, ou o elenco seja indefinido, ou o título seja inválido.

**O que será testado:**

- Caso o filme seja encontrado, a função deve retornar um array contendo os dois primeiros nomes de atores do elenco do filme.

- Caso o filme não seja encontrado, ou o elenco seja indefinido, ou o título seja inválido, a função deve retornar uma mensagem de erro específica para cada caso.

- A função deve retornar uma mensagem de erro `"Filme não encontrado."` quando fornecido um título inválido.

- A função deve retornar uma mensagem de erro `"Filme não encontrado."` quando o filme possui elenco indefinido ou quando o título for nulo ou quando o título for uma string vazia..
</details>

---

## 10. Implemente a função `countGenres`

<details>
  <summary>
    Contar a ocorrência de gêneros em uma lista de filmes e retornar um objeto com a contagem de cada gênero.
  </summary> <br />

 - Recebe o parâmetro `movies` que é um array contendo a lista de filmes

 - A função deve retornar um objeto vazio quando a lista de filmes estiver vazia.

 - A função deve lidar corretamente com filmes que possuem gêneros repetidos, contabilizando-os de forma adequada.

 - A função deve retornar um objeto vazio quando todos os filmes na lista não possuem gêneros.

**O que será testado:**

- Retorne um objeto onde as chaves são os nomes dos gêneros e os valores são as respectivas contagens de ocorrências.

- Recebendo um array de filmes deve retornar:
- Exemplo de saída:
  <code>[
   "Aventura": 5,
    "Ação": 7,
    "Comédia": 1,
    "Drama": 4,
    ...
  ]</code>

</details>

---

## 11. Implemente a função `averageRatingByGenre`

<details>
  <summary>
    Calcular e retornar a média de avaliação dos filmes de um determinado gênero.
  </summary> <br />

- Recebe o parâmetro `genre`: Uma string representando o gênero do filme.

- Utilize diretamente na função os filmes que vem no array de objetos que se encontra dentro do arquivo

- A função deve buscar todos os filmes do gênero fornecido

- Caso não haja filmes para o gênero fornecido, a função deve retornar uma mensagem informando isso.

- Se houver filmes do gênero, a função deve calcular a soma de suas avaliações e dividir pelo número de filmes.

- A média de avaliação deve ser formatada com duas casas decimais e inserida em uma string informativa.


**O que será testado:**

- Retorne uma string contendo a média de avaliação dos filmes do gênero fornecido, formatada com duas casas decimais, ou uma mensagem de erro indicando:
- Ausência de filmes para o gênero fornecido.
- Parâmetro genre ausente, inválido (não string) ou vazio.

- a função deve retornar a mensagem `"O parâmetro é obrigatório."` quando a função não receber o parâmetro `genre` ou quando for uma `string` vazia no parâmetro

- a função deve retornar a mensagem `"O parâmetro tem que ser uma string."` quando a função receber no parâmetro `genre` um valor do tipo `number`

- a função deve retornar a mensagem `"Não há filmes do gênero Filme Clássico."` quando por exemplo a função receber no parâmetro `genre` um valor `"Filme Clássico"`

</details>

---

## 12. Implemente a função `filmSeparation`

<details>
  <summary>
    Separar filmes por gênero e ordená-los alfabeticamente por título.
  </summary> <br />

- Recebe o parâmetro `movies` que é um array de objetos contendo a lista de filmes

- Recebe o parâmetro `details` que é um booleano com padrão `true`. Parâmetro opcional indicando se deve incluir detalhes dos filmes na separação.

- Para cada filme:
  Criar uma lista para o gênero correspondente se ele ainda não existir no objeto de saída.
  Adicionar o filme à lista do gênero correspondente.
  Se o parâmetro details for true, incluir os detalhes do filme no objeto adicionado.
  Ordenar alfabeticamente cada objeto de filmes por título.
  Retornar o objeto final contendo todos os gêneros e seus filmes separados.

- A função deve separar os filmes corretamente por gênero, mesmo quando cada filme possui vários gêneros.
- A função deve ordenar alfabeticamente os filmes dentro de cada gênero.
- A função deve excluir os detalhes dos filmes quando o parâmetro `details` for `false`.
- A função deve retornar um objeto vazio quando a lista de filmes estiver vazia.
- A função deve retornar um objeto vazio quando a lista de filmes estiver vazia.
**O que será testado:**
- Retorna um objeto onde as chaves são os gêneros e os valores são listas de objetos de filmes pertencentes a esses gêneros. Cada objeto de filme pode incluir detalhes se o parâmetro details for true.

- Quando o parâmetro de `details` for `true`
Exemplo de saída:
<code>{
  "Comédia": [{"anoLancamento": 2009, "avaliacao": 7.7, "diretor": "Todd Phillips", "id": 25, "titulo": "Se Beber, Não Case"}], 
  "Drama": [{"anoLancamento": 2018, "avaliacao": 7.5, "diretor": "John Krasinski", "id": 24, "titulo": "Um Lugar Silencioso"}],
  "Suspense": [{"anoLancamento": 2018, "avaliacao": 7.5, "diretor": "John Krasinski", "id": 24, "titulo": "Um Lugar Silencioso"}], 
}</code>

- Quando o parâmetro de `details` for `false`
Exemplo de saída: <code>{
  "Aventura": ["Gladiador"], "Ação": ["Gladiador"], 
  "Comédia": ["Esqueceram de Mim"], 
  "Drama": ["A Chegada", "Clube da Luta", "Gladiador", "Interestelar"], 
}</code>

</details>

---

## 13. Implemente a função `listOverdueLoans`

<details>
  <summary>
    Listar os empréstimos de filmes que estão atrasados.
  </summary> <br />

- Recebe o parâmetro `movies` que é um array contendo a lista de filmes

- `movies`: Uma lista de objetos de filmes, onde cada objeto possui propriedades como id, titulo, emprestimos (lista de objetos de empréstimos com propriedades como dataEmprestimo e dataDevolucao).

- Para cada empréstimo:
  Verificar se a `dataDevolucao` é anterior à data atual (considerando a data atual do sistema).
  Se estiver atrasado, adicionar o empréstimo ao array de objetos de empréstimos atrasados, incluindo as propriedades status e id do filme.
  Retornar a lista de empréstimos atrasados.

  Dica: pesquise sobre a implementação de <code> <strong> new Date(); </strong> </code>

- A função deve retornar um array vazio quando o array de filmes estiver vazia.

- A função deve retornar um array de objetos contendo apenas os empréstimos atrasados.

- A função deve retornar um array vazio quando não houver empréstimos atrasados.

- A função deve retornar um array vazio quando nenhum filme possuir empréstimos.

- A função deve retornar um array vazio quando todos os empréstimos ainda não estiverem vencidos.

**O que será testado:**

- Retorna um array de objetos de empréstimos que estão atrasados, onde cada objeto possui propriedades como `id`, `titulo`, `dataEmprestimo`, `dataDevolucao` e `status` (definido como "atrasado").


</details>

---

## 14. Implemente a função `classifyMovies`

<details>
  <summary>
    Classificar filmes em diferentes categorias com base na avaliação e disponibilidade.
  </summary> <br />

  - Recebe o parâmetro `movies` que é um array contendo a lista de filmes

  - Para cada filme:
  Classificar o filme por avaliação, adicionando-o à lista correspondente dentro do objeto avaliacao.
  Classificar o filme por disponibilidade, adicionando-o à lista correspondente dentro do objeto disponibilidade.
  Retornar o objeto final contendo a classificação dos filmes.

  - A função deve retornar um objeto com as propriedades avaliacao e disponibilidade, cada uma com as subpropriedades esperadas.

  - A função deve classificar os filmes em três intervalos de avaliação e ordená-los por título dentro de cada intervalo.

  - A função deve classificar os filmes como disponíveis ou indisponíveis e ordená-los por título dentro de cada categoria.

  - A função deve retornar um objeto com listas vazias para todas as categorias quando a entrada estiver vazia.

  - A função deve retornar uma lista vazia para filmes indisponíveis quando todos os filmes estiverem disponíveis.

**O que será testado:**

- Um objeto contendo as seguintes propriedades:
  `avaliacao`: Um objeto com três chaves representando intervalos de avaliação `("0-4.9", "5.0-7.9", "8.0-10.0")`. Cada chave possui um valor que é uma lista de filmes ordenados por título dentro do intervalo de avaliação correspondente.
  `disponibilidade`: Um objeto com duas chaves:
  `disponiveis`: Uma lista de filmes disponíveis (propriedade disponivel como true) ordenados por título.
  `naoDisponiveis`: Uma lista de filmes indisponíveis (propriedade disponivel como false) ordenados por título.

  - Quando informa um array de objetos contendo a lista de filmes
  Exemplo de saída:  <code>{
  avaliacao:  {
    '0-4.9': [],
    '5.0-7.9': [
      {
        titulo: "A Chegada",
        diretor: "Denis Villeneuve",
        genero: ["Ficção Científica", "Drama"],
        anoLancamento: 2016,
        avaliacao: 7.9,
      },
      {
        titulo: "Amor Além da Vida",
        diretor: "Vincent Ward",
        genero: ["Romance", "Fantasia"],
        anoLancamento: 1998,
        avaliacao: 7.1,
      },
      {
        titulo: "Esqueceram de Mim",
        diretor: "Chris Columbus",
        genero: ["Comédia", "Família"],
        anoLancamento: 1990,
        avaliacao: 7.6,
      }
    ],}
  }</code>

</details>

</details>

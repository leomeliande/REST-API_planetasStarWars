# REST-API_planetasStarWars

<font size="30"><b>AUTOR: LEONARDO DE FIGUEIREDO MELIANDE - DESAFIO BACK-END AME DIGITAL</font></b>

<b>Proposta:</b>

Nossos associados são aficionados por Star Wars e com isso, queremos criar um jogo com algumas informações da franquia.<br/>
Para possibilitar a equipe de front criar essa aplicação, queremos desenvolver uma API que contenha os dados dos planetas. 

Requisitos:

- A API deve ser REST

- Para cada planeta, os seguintes dados devem ser obtidos do banco de dados da aplicação, sendo inserido manualmente:
    Nome
    Clima
    Terreno
    
- Para cada planeta também devemos ter a quantidade de aparições em filmes, que podem ser obtidas pela API pública do Star Wars: https://swapi.co/

Funcionalidades desejadas: 

- Adicionar um planeta (com nome, clima e terreno)
- Listar planetas
- Buscar por nome
- Buscar por ID
- Remover planeta

Linguagens que usamos: Java, Go, Clojure, Node, Python<br/>
Bancos que usamos: MongoDB, Cassandra, DynamoDB, Datomic

<b>1 - Introdução:</b>

Esta API Rest foi criada com o objetivo de armazenar as informações de planetas da saga Star Wars.<br/>
A API armazena quatro informações principais sobre os planetas, três destes devem ser inseridas manualmente, sendo eles nome, clima, terreno. A quarta é a quantidade de aparições em filmes, e esta é obtida dinamicamente através da API pública do Star Wars: https://swapi.co/api/planets.<br/>
Estas consultas utilizam o nome dos planetas como parâmetro, sendo assim as informações obtidas através da SWAPI sempre estarão corretas.<br/>
Esta API não aceita nomes repetidos para os planetas inseridos.

<b>2 - Tecnologia:</b>

- Visual Studio Code
- Node.js v10.16.0
- MongoDB v4.0.10

<b>3 - Observações:</b>

- Antes de executar, verificar se o MongoDB se encontra instalado na máquina, e conectado em <i>localhost</i>, na porta <i>27017</i>.
- Não esquecer de instalar as dependências necessárias para a execução desta aplicação com a utilização do comando npm, por ex.: <i>npm install express --save</i>

Autor: Leonardo de Figueiredo Meliande

Proposta

Nossos associados s�o aficionados por Star Wars e com isso, queremos criar um jogo com algumas informa��es da franquia.
Para possibilitar a equipe de front criar essa aplica��o, queremos desenvolver uma API que contenha os dados dos planetas. 
Requisitos:
- A API deve ser REST
- Para cada planeta, os seguintes dados devem ser obtidos do banco de dados da aplica��o, sendo inserido manualmente:
    Nome
    Clima
    Terreno
- Para cada planeta tamb�m devemos ter a quantidade de apari��es em filmes, que podem ser obtidas pela API p�blica do Star Wars: https://swapi.co/
Funcionalidades desejadas: 
- Adicionar um planeta (com nome, clima e terreno)
- Listar planetas
- Buscar por nome
- Buscar por ID
- Remover planeta
Linguagens que usamos: Java, Go, Clojure, Node, Python
Bancos que usamos: MongoDB, Cassandra, DynamoDB, Datomic

Introdu��o

Esta API Rest foi criada com o objetivo de armazenar as informa��es de planetas da saga Star Wars.
A mesma foi escrita em Node, com a utiliza��o do framework Express e a base de dados MongoDB.
A API armazena quatro informa��es principais sobre os planetas, tr�s destes devem ser inseridas manualmente, sendo eles nome, clima, terreno. A quarta � a quantidade de apari��es em filmes, e esta � obtida dinamicamente atrav�s da API p�blica do Star Wars: https://swapi.co/api/planets.
Estas consultas utilizam o nome dos planetas como par�metro, sendo assim as informa��es obtidas atrav�s da SWAPI sempre estar�o corretas.
Esta API n�o aceita nomes repetidos para os planetas inseridos.

Observa��o

Antes de executar, verificar se o MongoDB se encontra instalado na m�quina, e conectado em localhost, na porta 27017.
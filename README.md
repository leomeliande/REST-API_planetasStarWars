# REST-API_planetasStarWars

Autor: Leonardo de Figueiredo Meliande

Proposta:

Nossos associados são aficionados por Star Wars e com isso, queremos criar um jogo com algumas informações da franquia.
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

Linguagens que usamos: Java, Go, Clojure, Node, Python
Bancos que usamos: MongoDB, Cassandra, DynamoDB, Datomic

Introdução:

Esta API Rest foi criada com o objetivo de armazenar as informações de planetas da saga Star Wars.
A mesma foi escrita em Node, com a utilização do framework Express e a base de dados MongoDB.
A API armazena quatro informações principais sobre os planetas, três destes devem ser inseridas manualmente, sendo eles nome, clima, terreno. A quarta é a quantidade de aparições em filmes, e esta é obtida dinamicamente através da API pública do Star Wars: https://swapi.co/api/planets.
Estas consultas utilizam o nome dos planetas como parâmetro, sendo assim as informações obtidas através da SWAPI sempre estarão corretas.
Esta API não aceita nomes repetidos para os planetas inseridos.

Observações:

Antes de executar, verificar se o MongoDB se encontra instalado na máquina, e conectado em localhost, na porta 27017.
Não esquecer de instalar os módulos necessários para a execução desta aplicação: "express", "mongoose", "got", etc.

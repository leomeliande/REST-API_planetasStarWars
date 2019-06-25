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

A API foi totalmente codificada em Node.js, em sua versão v10.16.0, com o auxílio do framework Express, e com a utilização da base de dados MongoDB, na versão v4.0.10. O editor de código escolhido foi o VS Code.

<b>3 - Observações:</b>

- Antes de executar, verificar se o MongoDB se encontra instalado na máquina, e conectado em:
        
        hostname: localhost
        port: 27017
        
- Não esquecer de instalar as dependências necessárias para a execução desta aplicação com a utilização do comando npm, por ex.:

        npm install express --save

<b>4 - Funcionalidades implementadas:</b>

<b><i>4.1 - Listar todos os planetas</b></i>

Para listar todos os planetas presentes no banco de dados, o usuário deve realizar uma solicitação get para o endpoint /planetas/lista, da seguinte forma:
        
    http://localhost:8080/api/planetas/lista

<b><i>4.2 - Adicionar um novo planeta</b></i>
    
Caso o usuário deseje adicionar um novo planeta na base de dados do sistema, ele deve realizar uma solicitação post para o endpoint /planetas/lista, e informar os seguintes dados em json:
        
    {
        "nome": "Alderaan",
        "clima": "temperate",
        "terreno": "grasslands, mountains"
    }
        
Desta forma será criado um novo planeta no banco de dados, tendo sua ID gerada automaticamente. A quantidade de aparições de cada planeta é obtida através da SWAPI, e tem seu valor padrão definido como 0 no código (caso um planeta não tenha aparecido em nenhum filme).

<b><i>4.3 - Realizando busca por ID</b></i>
    
Para realizar a busca de um planeta por seu ID, o usuário deverá realizar uma requisição get no endpoint /planetas/busca/id/, junto com a ID que você deseja pesquisar:
        
    http://localhost:8080/api/planetas/busca/id/5d10ca73d450281284bbbae8
        
O exemplo acima irá retornar a seguinte informação:
        
    message	"Carregando detalhes do planeta..."
    data	
        aparicoes	"2"
        _id	"5d10ca73d450281284bbbae8"
        nome	"Alderaan"
        clima	"temperate"
        terreno	"grasslands, mountains"
        create_date	"2019-06-24T13:04:51.977Z"
        __v	0

<b><i>4.4 - Realizando busca por nome</b></i>
    
Caso seja feita a busca por nome de um planeta, deve-se solicitar uma requisição post no endpoint /planetas/busca/nome/, seguido do nome do planeta a ser pesquisado. O nome não precisa ser exatamente idêntico (caso o usuário não saiba o nome exato do planeta, ou apenas parte dele), como por exemplo:
        
    http://localhost:8080/api/planetas/busca/nome/Alde, ou 
    http://localhost:8080/api/planetas/busca/nome/Alderaan
        
Ambos irão retornar a informação exibida no tópico acima.
        
<b><i>4.5 - Deletar um planeta</b></i>
    
Para o caso de remoção de um planeta do banco de dados, deve-se realizar uma requisição delete para o endpoint /planetas/remover/id/, junto do ID do planeta que se deve deletar:
        
    http://localhost:8080/api/planetas/remover/id/5d10ca73d450281284bbbae8


“Do. Or do not. There is no try.” - Yoda

<IMG SRC="https://miro.medium.com/max/500/0*qFTabwOQbqE_sqhD.gif">
        
        
        

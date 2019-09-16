/* Nome do arquivo: index.js

Feito por: Leonardo de Figueiredo Meliande
Em: 24/06/2019 as 10:22

*/
// Importar express
let express = require('express')
// Importar Body parser
let bodyParser = require('body-parser');
// Importar Mongoose
//let mongoose = require('mongoose');

// Inicializar aplicação
let app = express();

// Configurar porta do server
var port = process.env.PORT || 8080;

// Configurar bodyparser para suportar requisições POST
app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());
/*
// Conecta ao Mongoose e define a variável de conexão
mongoose.connect('mongodb://localhost/planetas', { 
    useNewUrlParser: true 
}, () => {
    console.log('Banco de dados conectado');
})

mongoose.set('useCreateIndex', true)*/

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://leonardo:<89587264>@planetassw-1qeka.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// Enviar mensagem para URL
app.get('/', (req, res) => 
    res.send('Esta é uma aplicação para armazenar dados dos planetas da saga Star Wars.')
);

// Iniciar aplicação na porta específica
app.listen(port, function () {
     console.log("API rodando com sucesso na porta " + port);
});

// Importa router
let apiRoutes = require("./routes/api-routes")

// Usa as rotas na aplicação
app.use('/api', apiRoutes)

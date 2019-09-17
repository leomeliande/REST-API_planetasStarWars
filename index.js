/* Nome do arquivo: index.js

Feito por: Leonardo de Figueiredo Meliande
Em: 24/06/2019 as 10:22

*/

const cors = require('cors');

// Importar express
let express = require('express')
// Importar Body parser
let bodyParser = require('body-parser');
// Importar Mongoose
let mongoose = require('mongoose');

// Inicializar aplicação
let app = express();

// Configurar porta do server
var port = process.env.PORT || 8080;

//attttt
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Configurar bodyparser para suportar requisições POST
app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());

// Conecta ao Mongoose e define a variável de conexão
mongoose.connect('mongodb://localhost/planetas', { 
    useNewUrlParser: true 
}, () => {
    console.log('Banco de dados conectado');
})

mongoose.set('useCreateIndex', true)

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

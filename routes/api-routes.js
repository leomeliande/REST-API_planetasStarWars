// api-routes.js

// Inicializa o router express
let router = require('express').Router();

// Define a mensagem padrão da API
router.get('/', function (req, res) {
    res.json({
        status: 'A API está funcionando.',
        message: 'Um serviço para armazenar dados de planetas da saga Star Wars!',
    });
});

// Importa o controller de planetas
var planetaController = require('../controllers/planetaController');

// Endpoints
router.route('/planetas/lista')
    .get(planetaController.index)
    .post(planetaController.new);

router.route('/planetas/busca/id/:planeta_id')
    .get(planetaController.viewByID)
    .delete(planetaController.delete);

router.route('/planetas/busca/nome/:nome')
    .get(planetaController.viewByName);

// Exportar endpoints da API
module.exports = router;
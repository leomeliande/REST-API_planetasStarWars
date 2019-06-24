// planetaController.js

// Importa o model de planeta
Planeta = require('../models/planetaModel');

// Importar o módulo GOT
let got = require('got');
// Importar Mongoose
var mongoose = require('mongoose');

// Lista todos os planetas armazenados
exports.index = function (req, res) {

    Planeta.get(function (err, planetas) {
        if (err) {
            res.json({
                status: "Erro!",
                message: err,
            });
        }
        res.json({
            status: "Sucesso!",
            message: "Planetas recuperados com sucesso.",
            data: planetas
        });
    });
};

// Armazenar novos planetas
exports.new = async function (req, res) {

        var nomePlaneta = req.body.nome;

        // Realiza a busca pela quantidade de aparições em filmes na SWAPI
        await got('https://swapi.co/api/planets/?search=' + nomePlaneta, { json: true })
            .then(async function(response) {

            var qtd = Object.keys(response.body.results[0].films).length;
            var strQtd = JSON.stringify(qtd);

        //console.log(strQtd);

        const planeta = new Planeta({
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            clima: req.body.clima,
            terreno: req.body.terreno,
            aparicoes: strQtd
        });

    // Salva o planeta e checa por erros
        planeta.save(function (err) {
            if (err)
                res.json(err);

        res.status(201).json({
                message: 'Novo planeta armazenado!',
                data: planeta
        });
        });
    });
}

// Buscar por ID
exports.viewByID = function (req, res, next) {

        Planeta.findById(req.params.planeta_id, function (err, planeta) {
            if (err)
                res.send(err);
            res.json({
                message: 'Carregando detalhes do planeta...',
                data: planeta
            });
        });
};

// Buscar por nome
exports.viewByName = function (req, res, next) {
    
    var nome = req.params.nome;

    Planeta.find({nome: new RegExp(nome, 'i')}, function (err, planeta) {
        if (err)
            res.send(err);
        res.json({
            message: 'Carregando detalhes do planeta...',
            data: planeta
        });
    });
};

// Deletar um planeta específico
exports.delete = function (req, res) {
    Planeta.deleteOne({_id: req.params.planeta_id}, function (err, planeta) {
        if (err)
            res.send(err);

    res.json({
            status: "Sucesso!",
            message: 'O planeta foi deletado.'
        });
    });
};
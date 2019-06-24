// planetaModel.js

var mongoose = require('mongoose');

// Configura o schema
var planetaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        unique: true,
        required: true
    },
    clima: {
        type: String,
        required: true
    },
    terreno: {
        type: String,
        required: true
    },
    aparicoes: {
        type: String,
        default: 0
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Exporta o modelo de planeta
var Planeta = module.exports = mongoose.model('planeta', planetaSchema);

module.exports.get = function (callback, limit) {
    Planeta.find(callback).limit(limit);
}
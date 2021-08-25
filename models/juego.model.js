const mongoose = require('mongoose');

const juegoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    fechaLanzamiento: {
        type: Date
    },

    clasificacionEdad: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        required: true
    },

    estudio: {
        type: String,
        required: true
    },

    plataforma: {
        type: String,
        required: true
    }
})

let Juego = module.exports = mongoose.model('Juego', juegoSchema);

module.exports.get = function(callback, limit) {

    Juego.find(callback).limit(limit);

}
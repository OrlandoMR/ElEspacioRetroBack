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
        type: int,
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

module.exports = mongoose.model('juego', juegoSchema);
const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    correo:{
        type: String,
        required: true
    },

    contraseña:{
        type: String,
        required: true
    },

    rol: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('usuario', usuarioSchema);
const mongoose = require('mongoose');

const comentarioSchema = mongoose.Schema({
    DescripComent: {
        type: String,
        required: true
    },

    Juego: {
        type: String,
        required: true
    },

    Usuario: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('comentario', comentarioSchema);
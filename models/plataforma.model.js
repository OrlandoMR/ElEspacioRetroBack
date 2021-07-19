const mongoose = require('mongoose');

const plataformaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    fechaFund: {
        type: String
    }
})

module.exports = mongoose.model('plataforma', plataformaSchema);
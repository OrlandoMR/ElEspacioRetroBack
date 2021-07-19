const mongoose = require('mongoose');

const estudioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    fechaFund: {
        type: Date
    }
})

module.exports = mongoose.model('estudio', estudioSchema);
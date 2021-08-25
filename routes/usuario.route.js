let rutas = require('express').Router();
rutas.get('/', (req, res) => {
    res.json({
        status: '200',
        message: 'Works'
    });
});

let usuario = require('../controllers/usuario.controller');

rutas.route('/usuario')
    .get(usuario.index)
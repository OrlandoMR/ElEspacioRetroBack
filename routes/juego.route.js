let rutas = require('express').Router();
rutas.get('/', (req, res) => {
    res.json({
        status: '200',
        message: 'Works'
    });
});

let juego = require('../controllers/juego.controller');

rutas.route('/juego')
    .get(juego.index)
    .post(juego.new)
    .put(juego.update)
    .delete(juego.delete)

rutas.route('/juego/:id').get(juego.view)

module.exports = rutas;
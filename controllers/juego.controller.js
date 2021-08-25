let Juego = require("../models/juego.model");

exports.index = function(req, res) {

    Juego.get(function(err, juegos) {
        if (err) {
            res.json({
                status: "Error no se pudo conectar.",
                message: err
            })
        }
        res.json({
            status: "Conexión exitosa.",
            message: "Conexión realizada.",
            data: juegos
        })
    });
}

exports.new = function(req, res) {
    let juego = new Juego();
    // juego.nombre = req.body.nombre ? req.body.nombre : juego.nombre;
    // juego.descripcion = req.body.descripcion ? req.body.descripcion : juego.descripcion;
    // juego.fechaLanzamiento = req.body.fechaLanzamiento ? req.body.fechaLanzamiento : juego.fechaLanzamiento;
    // juego.clasificacionEdad = req.body.clasificacionEdad ? req.body.clasificacionEdad : juego.clasificacionEdad;
    // juego.categoria = req.body.categoria ? req.body.categoria : juego.categoria;
    // juego.estudio = req.body.estudio ? req.body.estudio : juego.estudio;
    // juego.plataforma = req.body.plataforma ? req.body.plataforma : juego.plataforma;

    juego.save(function(err) {
        if (err) {
            res.json(req.body);
        } else {
            res.json({
                message: "Se creo el juego exitosamente",
                juego,
                body: req.body
            })
        }
    })
}

exports.view = function(req, res) {
    Juego.findById(req.params.id, function(err, juego) {
        if (err)
            res.send(err);
        res.json({
            id: req.params.id,
            message: 'cargando detalles del juego..',
            data: juego
        });
    });
};

exports.update = function(req, res) {
    juego.findById(req.body.id, function(err, juego) {
        if (err) {
            res.json(err);
        }
        juego.nombre = req.body.nombre ? req.body.nombre : juego.nombre;
        juego.descripcion = req.body.descripcion ? req.body.descripcion : juego.descripcion;
        juego.fechaLanzamiento = req.body.fechaLanzamiento ? req.body.fechaLanzamiento : juego.fechaLanzamiento;
        juego.clasificacionEdad = req.body.clasificacionEdad ? req.body.clasificacionEdad : juego.clasificacionEdad;
        juego.categoria = req.body.categoria ? req.body.categoria : juego.categoria;
        juego.estudio = req.body.estudio ? req.body.estudio : juego.estudio;
        juego.plataforma = req.body.plataforma ? req.body.plataforma : juego.plataforma;

        juego.save(function(err) {
            if (err) {
                res.json(err);
            } else {
                res.json({
                    message: "Categoria actualizada con exito",
                    data: juego
                });
            }
        });
    });
};

exports.delete = function(req, res) {
    juego.remove({
        _id: req.body.id
    }, function(err, usuario) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'categoria eliminada',
            data: juego
        });
    });
};
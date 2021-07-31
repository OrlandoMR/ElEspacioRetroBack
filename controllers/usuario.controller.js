usuario = require("../models/usuarios.model");

exports.index = function(req, res) {

    usuario.get(function(err, usuarios) {

        if (err) {
            res.json({
                status: "Error no se pudo conectar",
                message: err
            })
        }
        res.json({
            status: "Exitoso",
            message: "La conexion se realizó",
            data: usuarios
        })

    });
}

exports.new = function(req, res) {
    let usuario = new Usuario();
    usuario.nombre = req.body.nombre ? req.body.nombre : usuario.nombre;
    usuario.correo = req.body.correo ? req.body.correo : usuario.correo;
    usuario.contraseña = req.body.contraseña ? req.body.contraseña : usuario.contraseña;
    usuario.rol = req.body.rol ? req.body.rol : usuario.rol;

    usuario.save(function(err) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                message: "Se creo exitosamente",
                usuario
            })
        }


    })
}

exports.update = function(req, res) {
    usuario.findById(req.body.id, function(err, usuario) {
        if (err) {
            res.json(err);
        }
        usuario.nombre = req.body.nombre ? req.body.nombre : usuario.nombre;
        usuario.correo = req.body.correo ? req.body.correo : usuario.correo;
        usuario.contraseña = req.body.contraseña ? req.body.contraseña : usuario.contraseña;
        usuario.rol = req.body.rol ? req.body.rol : usuario.rol;
        usuario.save(function(err) {
            // Check for validation error
            if (err) {
                res.json(err);
            } else {
                res.json({
                    message: 'creado nuevo tripulante!',
                    data: usuario
                });
            }

        });
    });
};

exports.delete = function(req, res) {
    Tripulante.remove({
        _id: req.body.id
    }, function(err, usuario) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'usuario borrado',
            data: usuario
        });
    });
};
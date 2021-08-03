categoria = require("../models/categoria.model");

exports.index = function(req, res){

    categoria.get(function(err, categorias) {
        if(err){
            res.json({
                status: "Error no se pudo conectar.",
                message: err
            })
        }
        res.json({
            status: "Conexión exitosa.",
            message: "Conexión realizada.",
            data: categorias
        })
    }); 
}

exports.new = function(req,res){
    let categoria = new Categoria();
    categoria.nombre = req.body.nombre ? req.body.nombre : categoria.nombre;

    categoria.save(function(err){
        if(err) {
            res.json(err);
        }
        else{
            res.json({
                message: "Se creo la categoria exitosamente",
                categoria
            })
        }
    })
}

exports.update = function(req,res){
    categoria.findById(req.body.id, function(err, categoria){
        if(err){
            res.json(err);
        }
        categoria.nombre = req.body.nombre ? req.body.nombre : categoria.nombre;

        categoria.save(function(err){
            if(err){
                res.json(err);
            }
            else{
                res.json({
                    message: "Categoria actualizada con exito",
                    data: categoria
                });
            }
        });
    });
};

exports.delete = function(req, res) {
    categoria.remove({
        _id: req.body.id
    }, function(err, usuario) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'categoria eliminada',
            data: categoria
        });
    });
};
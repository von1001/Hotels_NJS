const Services = require("../Models/t_services");

exports.create = (req, res) => {
    if ( !req.body.Name) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const Services = {
        ID: req.params.ID,
        Name: req.body.Name
    }

    Services.create(hotel)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.body.Name) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const Services = {
        ID: req.params.ID,
        Name: req.body.Name
    }

    Services.update(hotel, {where:{ID: Room.ID}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Services.findAll()
    .then(data => {
        res.send(data)
    })
}

exports.findById = (req, res) => {
    if (!req.params.ID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const ID = req.params.ID;
    
    Services.findOne({where: {ID: ID}})
    .then(data => {
        res.send(data)
    })
}

exports.delete = (req, res) => {
    if (!req.params.ID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const ID = req.params.ID;
    
    Services.destroy({where: {ID: ID}})
}

exports.count = (req, res) => {
    Services.count()
    .then(data => {
        res.send(data)
    })
}

const User = require("../Models/t_user");

exports.create = (req, res) => {
    if (!req.body.Username 
        || !req.body.UserPassword) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const user = {
        ID: req.params.ID,
        Username: req.body.Username,
        UserPassword: req.body.UserPassword,
    }

    User.create(user)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.body.Username 
        || !req.body.UserPassword) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const user = {
        ID: req.params.ID,
        Username: req.body.Username,
        UserPassword: req.body.UserPassword,
    }

    User.update(user, {where:{id: user.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    User.findAll()
    .then(data => {
        res.send(data)
    })
}

exports.findById = (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const id = req.params.id;
    
    User.findOne({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.delete = (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const id = req.params.id;
    
    User.destroy({where: {id: id}})
}

exports.count = (req, res) => {
    User.count()
    .then(data => {
        res.send(data)
    })
}

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
    };
exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
    };
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};  
exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};
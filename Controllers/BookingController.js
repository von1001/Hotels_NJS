const Booking = require("../Models/t_booking");
const User = require('../Models/t_user')

exports.create = (req, res) => {
    if (!req.body.UserId 
        || !req.body.ArrivalDate
        || !req.body.DepartureDate
        || !req.body.RoomID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const Booking = {
        ID: req.params.ID,
        UserId: req.body.UserID,
        ArrivalDate: req.body.ArrivalDate,
        DepartureDate: req.body.DepartureDate,
        RoomID: req.body.RoomID
    }

    Booking.create(booking)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.body.UserID 
        || !req.body.ArrivalDate
        || !req.body.DepartureDate
        || !req.body.RoomID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const booking = {
        ID: req.params.ID,
        UserID: req.body.UserID,
        ArrivalDate: req.body.ArrivalDate,
        DepartureDate: req.body.DepartureDate,
        RoomID: req.body.RoomID
    }

    Booking.update(booking, {where:{id: booking.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Booking.findAll()
    .then(data => {
        res.send(data)
    })
}

exports.findById = (req, res) => {
    if (!req.params.UserID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const id = req.params.id;
    
    Booking.findOne({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.findByUser = (req, res) => {
    if (!req.params.UserID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }
    
    const User  = req.params.UserID;
    const booking = {
        ID: req.params.ID,
        UserID: req.body.UserID,
        ArrivalDate: req.body.ArrivalDate,
        DepartureDate: req.body.DepartureDate,
        RoomID: req.body.RoomID
    }

    Booking.findAll({where: {bookingID: User.UserID}})
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
    
    Booking.destroy({where: {id: id}})
}

exports.count = (req, res) => {
    Booking.count()
    .then(data => {
        res.send(data)
    })
}

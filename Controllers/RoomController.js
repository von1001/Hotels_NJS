const Room = require("../Models/t_room");
const extrasroom = require("../Models/t_extrasroom");

exports.create = (req, res) => {
    if ( !req.body.HotelId
        || !req.body.RoomTypeID
        || !req.body.Price
        || !req.body.Amount
        || !req.body.RoomPictureID
        || !req.body.ServiceID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const Room = {
        HotelId: req.params.HotelId,
        RoomID: req.body.RoomID,
        RoomTypeID: req.body.RoomTypeID,
        Price: req.body.Price,
        Amount: req.body.Amount,
        RoomPictureID: req.body.RoomPictureID,
        ServiceID: req.body.ServiceID
    }

    Room.create(Room)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.body.HotelId
        || !req.body.RoomTypeID
        || !req.body.Price
        || !req.body.Amount
        || !req.body.RoomPictureID
        || !req.body.ServiceID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const Room = {
        HotelId: req.params.HotelId,
        RoomID: req.body.RoomID,
        RoomTypeID: req.body.RoomTypeID,
        Price: req.body.Price,
        Amount: req.body.Amount,
        RoomPictureID: req.body.RoomPictureID,
        ServiceID: req.body.ServiceID
    }

    Hotel.update(hotel, {where:{ID: Room.ID}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Room.findAll()
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
    
    Room.findOne({where: {ID: ID}})
    .then(data => {
        res.send(data)
    })
}

exports.findServiceByRoomType = (req, res) => {
    if (!req.params.RoomID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const room = req.body.RoomID;
    
    reviews.findOne({where: {ServiceID: room.RoomID}})
    .then(data => {
        res.send(data)
    })
}

exports.findRoomByRoomType = (req, res) => {
    if (!req.params.RoomTypeID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const type = req.body.RoomTypeID;
    
    reviews.findOne({where: {RoomID: type.RoomTypeID}})
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
    
    Room.destroy({where: {ID: ID}})
}

exports.count = (req, res) => {
    Room.count()
    .then(data => {
        res.send(data)
    })
}

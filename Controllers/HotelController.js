const Hotel = require("../Models/t_hotel");
const extrashotel = require("../Models/t_extrashotel");

exports.create = (req, res) => {
    if ( !req.body.Description
        || !req.body.Adress
        || !req.body.Floors
        || !req.body.Stars
        || !req.body.HotelPictureID
        || !req.body.ServiceID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const hotel = {
        ID: req.params.ID,
        Name: req.body.Name,
        Description: req.body.Description,
        Floors: req.body.Floors,
        Stars: req.body.Stars,
        HotelPictureID: req.body.HotelPictureID,
        ServiceID: req.body.ServiceID  
    }

    Hotel.create(hotel)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.body.Name 
        || !req.body.Description
        || !req.body.Adress
        || !req.body.Floors
        || !req.body.Stars
        || !req.body.HotelPictureID
        || !req.body.ServiceID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const hotel = {
        ID: req.params.ID,
        Name: req.body.Name,
        Description: req.body.Description,
        Floors: req.body.Floors,
        Stars: req.body.Stars,
        HotelPictureID: req.body.HotelPictureID,
        ServiceID: req.body.ServiceID  
    }

    Hotel.update(hotel, {where:{ID: hotel.ID}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Hotel.findAll()
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
    
    Hotel.findOne({where: {ID: ID}})
    .then(data => {
        res.send(data)
    })
}

exports.findPicsByHotel = (req, res) => {
    if (!req.params.ID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const HotelID = req.params.HotelID;
    
    Hotel.findOne({where: {PictureID: HotelID}})
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
    
    Hotel.destroy({where: {ID: ID}})
}

exports.count = (req, res) => {
    Hotel.count()
    .then(data => {
        res.send(data)
    })
}

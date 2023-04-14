const reviews = require("../Models/t_reviews");

exports.create = (req, res) => {
    if (!req.body.UserID
        || !req.body.BookingId
        || !req.body.Opinion
        || !req.body.Rating
        || !req.body.ReviewPictureID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const reviews = {
        ID: req.params.ID,
        UserID: req.body.UserID,
        BookingId: req.body.BookingId,
        Opinion: req.body.Opinion,
        Rating: req.body.Rating,
        ReviewPictureId: req.body.ReviewPictureID
    }

    reviews.create(hotel)
    .then(data => {
        res.send(data)
    })
} 

exports.update = (req, res) => {
    if (!req.body.UserID 
        || !req.body.BookingId
        || !req.body.Opinion
        || !req.body.Rating
        || !req.body.ReviewPictureID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const reviews = {
        ID: req.params.ID,
        UserID: req.body.UserID,
        BookingId: req.body.BookingId,
        Opinion: req.body.Opinion,
        Rating: req.body.Rating,
        ReviewPictureId: req.body.ReviewPictureID
    }

    reviews.update(hotel, {where:{ID: hotel.ID}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    reviews.findAll()
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
    
    reviews.findOne({where: {ID: ID}})
    .then(data => {
        res.send(data)
    })
}

exports.findPicsByReview = (req, res) => {
    if (!req.params.ReviewID) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const Rev = req.body.ReviewID;
    
    reviews.findOne({where: {ReviewPIctureID: Rev.ReviewID}})
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
    
    reviews.destroy({where: {ID: ID}})
}

exports.count = (req, res) => {
    reviews.count()
    .then(data => {
        res.send(data)
    })
}

const Store = require('../models/store.model.js');

module.exports.getAll = (req, response) => {
    Store.find()
        .then((stores) => {
            response.json({ StoreList : stores });
        })
        .catch((error) => {
            response.status(400).json({ message: 'Wrong Kid Died', error });
        });
};

module.exports.getOne = (req, response) => {
    Store.findOne({ _id: req.params.id })
        .then((store) => {
            response.json({ store });
        })
        .catch((error) => {
            response.status(400).json({ message: 'Wrong Kid Died', error });
        });
};


module.exports.create = (req, response) => {
    Store.create(req.body)
        .then((store) => {
            response.json({ store });
        })
        .catch((error) => {
            response.status(400).json({ message: 'Wrong Kid Died', error });
        });
};

module.exports.update = (req, response) => {
    Store.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,

    })
        .then((store) => {
            response.json({ store });
        })
        .catch((error) => {
            response.status(400).json({ message: 'Wrong Kid Died', error });
        });
};
module.exports.delete = (req, res) => {
    console.log(req.params.id)
    Store.deleteOne({ _id: req.params.id })
        .then((responses) => {
            res.json({ responses });
        })
        .catch((error) => {
            res.status(400).json({ message: 'Wrong Kid Died', error: error });
        });
};
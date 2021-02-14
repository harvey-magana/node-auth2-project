const router = require('express').Router();

Users = require('./users-model.js');

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

module.exports = router;
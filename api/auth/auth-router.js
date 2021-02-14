const bcrypt = require("bcrypt");
const router = require("express").Router();
//const jwt = require('jsonwebtoken');
//const secrets = require('../config/secrets.js');

const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");

router.post("/register", (req, res) => {
    const credentials = req.body;
  
    Users.add(credentials)
    .then(user => {
      res.status(201).json({ data: user });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
  });

  module.exports = router;
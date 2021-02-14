const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

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

  router.post("/login", (req, res) => {
    const { username, password } = req.body;
  
    if (isValid(req.body)) {
      Users.findBy({ username: username })
        .then(([user]) => {
          // compare the password the hash stored in the database
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message: "Welcome to our API", token });
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
        })
        .catch(error => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      });
    }
  });

  function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      department: user.department
    }
  
    const options = {
      expiresIn: '1d'
    }
  
    const token = jwt.sign(payload, secrets.jwtSecret, options);
    return token;
  }

  module.exports = router;
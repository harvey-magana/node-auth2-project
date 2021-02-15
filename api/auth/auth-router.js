const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');
const router = require("express").Router();

const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");

router.post("/register", (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    // hash the password
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    // save the user to the database
    Users.add(credentials)
      .then(user => {
        const token = generateToken(user);
        res.status(201).json({ data: user, token });
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

  router.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log("auth-router.js line 23", password)

    if (isValid(req.body)) {
      console.log("auth-router.js line 26", req.body)
      Users.findBy({ username: username })
        .then(([user]) => {
          // compare the password the hash stored in the database
          console.log("auth-router.js line 30", user)
          if (user && bcryptjs.compareSync(password, user.password)) {
            console.log("auth-router.js line 32", password)
            const token = generateToken(user);
            res.status(200).json({ message: `welcome ${user.username}`, token });
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
    console.log(token)
    return token;
  }

  module.exports = router;
const router = require("express").Router();

const Users = require("./users-model.js");
//const restricted = require("../auth/restricted-middleware.js");
//const checkDept = require("../auth/check-dept-middleware.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      //console.log('current users', users.role)
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
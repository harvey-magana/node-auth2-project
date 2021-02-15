const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {

  const token = req.headers?.authorization?.split(' ')[1];
  /*
  const token = req.headers.authorization ?
  req.headers.authorization.split(' ')[1] :
  '';
  */

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "can't touch this"})
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: "can't touch this"})
  }
};
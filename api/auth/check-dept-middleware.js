module.exports = department => {
    return function (req, res, next) {
        console.log('current req', req.decodedJwt)
        if ((req?.decodedJwt?.department || '') === department) {
            next();
        } else {
            res.status(403).json({ you: 'are powerless' });
        }
    }
}
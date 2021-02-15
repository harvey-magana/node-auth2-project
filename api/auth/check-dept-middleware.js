module.exports = department => {
    return function (req, res, next) {
        console.log("*****************************************************")
        console.log('current req', req.body)
        console.log("*****************************************************")
        if ((req?.decodedJWT?.department || '') === department) {
            next();
        } else {
            res.status(403).json({ you: 'are powerless' });
        }
    }
}

// req?.decodedJwt?.department is using something called operational chaining

const express = require('express');

const router = express.Router();

protectedRoutes = [
    '/admin/',
    '/my-account/'
]

router.use((req, res, next) => {
    let url = req.url;
    if (protectedRoutes.some(function(v) { return url.indexOf(v) >= 0; })) {
        console.log('Not authorised!');
        next();
    } else {
        next();
    }
});

module.exports = router;

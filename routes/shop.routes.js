// Core Modules
const path = require('path');
// NPM Modules
const express = require('express');
// Custom Modules
const root = require('../util/path');
const adminData = require('./admin.routes')

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    res.sendFile(path.join(root, 'views', 'index.html' ));
});

module.exports = router;

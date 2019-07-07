// Core Modules
const path = require('path');
// NPM Modules
const express = require('express');
// Custom Modules
const root = require('../util/path');

const products = [];

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(root, 'views', 'admin', 'addProduct.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
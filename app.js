// Core Modules
const path = require('path');
const http = require('http');
// NPM Packages
const express = require('express');
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars').create({
    extname: 'hbs'
});

const port = 3000;
const app = express();

// Templating engine (Handlebars) and Views directory
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', "views");


// handlebars.registerPartial('notFound', '{{name}}')

// Middleware Imports
const authMiddleware = require('./auth/auth.middleware');

// Route Imports
const adminData = require('./routes/admin.routes');
const publicRoutes = require('./routes/shop.routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(authMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(publicRoutes);
app.use('/admin', adminData.routes);
app.use('**', (req, res, next) => { res.status(404)
    .render('notFound', {pageTitle: 'Not Found' })});

const server = http.createServer(app);

server.listen(port);
console.log('Server listening on http://localhost:' + port);

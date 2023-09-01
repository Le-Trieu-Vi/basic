const express = require("express");
const router = require("./app/routes/product.route");
const app = express();

app.use('/', router);

app.use('/user', router);

module.exports = app;
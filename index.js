'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./api');

const app = express();
const appPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(apiRoutes);

var server = app.listen(appPort, () => console.log(`Server running on port ${appPort}`));

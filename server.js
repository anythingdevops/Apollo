'use strict';

const express = require('express');
var path = require("path");

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile('Home.PNG', { root: path.join(__dirname, './img') });
});

var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);

const Bundler = require('parcel-bundler');
const express = require('express');
const bundler = new Bundler('./src/index.html');
const app = express();
const API_PORT = 80;

app.use(bundler.middleware());

app.listen(API_PORT, () => console.log('Frontend listening on port: ' + API_PORT));

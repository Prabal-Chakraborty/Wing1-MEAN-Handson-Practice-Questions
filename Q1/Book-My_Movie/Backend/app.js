const express = require('express');
const cors = require('cors');
const movieRouter = require('./routers/movie');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', movieRouter);

module.exports = app;
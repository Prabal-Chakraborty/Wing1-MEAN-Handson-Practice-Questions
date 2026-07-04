const express = require('express');
const cors = require('cors');
const concertRoutes = require('./routers/concert');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', concertRoutes);

module.exports = app;
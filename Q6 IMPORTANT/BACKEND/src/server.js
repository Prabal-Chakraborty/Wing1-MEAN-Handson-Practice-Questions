const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect('mongodb://127.0.0.1:27017/concert')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Mongo connection error:', error);
  });
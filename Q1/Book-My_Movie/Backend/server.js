const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect('mongodb://127.0.0.1:27017/moviebooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.log(error);
  });
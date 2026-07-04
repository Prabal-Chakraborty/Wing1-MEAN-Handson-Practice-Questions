const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/students');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/students', studentRoutes);

mongoose.connect('mongodb://localhost:27017/StudentData', {
  useNewUrlParser:    true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected: student-app'))
.catch(err => console.error('MongoDB error:', err));

app.listen(3000, () => console.log('Server running on port 3000'));

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://infosys:infosys%40123@cluster0.qisslkp.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

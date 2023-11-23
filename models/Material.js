const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  unit: String,
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Material', materialSchema);
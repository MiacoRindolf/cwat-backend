const mongoose = require('mongoose');

const drawingReferenceSchema = new mongoose.Schema({
  file_name: {
    type: String,
    required: true,
  },
  description: String,
  file_path: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('DrawingReference', drawingReferenceSchema);
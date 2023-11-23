const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// MongoDB Connection
mongoose.connect('mongodb+srv://rindolfmiaco:Ron271894@cwat.l8xgjv4.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

const authRoutes = require('./routes/authRoutes');
const drawingReferencesRouter = require('./routes/drawingReferences');
const materialsRouter = require('./routes/materials');
app.use('/api/auth', authRoutes);
app.use('/api', drawingReferencesRouter);
app.use('/api', materialsRouter);

// Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

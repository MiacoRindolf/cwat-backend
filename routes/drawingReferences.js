// cwat-backend/routes/drawingReferences.js
const express = require('express');
const router = express.Router();
const DrawingReference = require('../models/DrawingReference');

// Fetch all drawing references
router.get('/drawing-references', async (req, res) => {
  try {
    const references = await DrawingReference.find();
    res.json(references);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

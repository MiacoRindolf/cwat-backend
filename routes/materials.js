const express = require('express');
const router = express.Router();
const Material = require('../models/Material');

// Fetch all materials
router.get('/materials', async (req, res) => {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new material
router.post('/materials', async (req, res) => {
  const { name, description, unit, price } = req.body;
  try {
    const newMaterial = new Material({ name, description, unit, price });
    await newMaterial.save();
    res.json(newMaterial);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
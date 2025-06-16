const asyncHandler = require('express-async-handler');
const Official = require('../models/Official');

// @desc    Get all officials (can filter by category)
// @route   GET /api/officials
// @access  Public
const getOfficials = asyncHandler(async (req, res) => {
  const category = req.query.category; // e.g., ?category=Executive Committee
  let query = {};
  if (category) {
    query.category = category;
  }
  const officials = await Official.find(query).sort({ name: 1 });
  res.json(officials);
});

// @desc    Get a single official by ID
// @route   GET /api/officials/:id
// @access  Public
const getOfficialById = asyncHandler(async (req, res) => {
  const official = await Official.findById(req.params.id);

  if (official) {
    res.json(official);
  } else {
    res.status(404);
    throw new Error('Official not found');
  }
});

// @desc    Create a new official
// @route   POST /api/officials
// @access  Private/Admin
const createOfficial = asyncHandler(async (req, res) => {
  const { name, title, category, imageUrl, socialMedia } = req.body;

  const official = new Official({
    name,
    title,
    category,
    imageUrl,
    socialMedia,
  });

  const createdOfficial = await official.save();
  res.status(201).json(createdOfficial);
});

// @desc    Update an official
// @route   PUT /api/officials/:id
// @access  Private/Admin
const updateOfficial = asyncHandler(async (req, res) => {
  const { name, title, category, imageUrl, socialMedia } = req.body;

  const official = await Official.findById(req.params.id);

  if (official) {
    official.name = name || official.name;
    official.title = title || official.title;
    official.category = category || official.category;
    official.imageUrl = imageUrl || official.imageUrl;
    official.socialMedia = socialMedia || official.socialMedia; // Note: This will replace the array, consider push/pull if needed

    const updatedOfficial = await official.save();
    res.json(updatedOfficial);
  } else {
    res.status(404);
    throw new Error('Official not found');
  }
});

// @desc    Delete an official
// @route   DELETE /api/officials/:id
// @access  Private/Admin
const deleteOfficial = asyncHandler(async (req, res) => {
  const official = await Official.findById(req.params.id);

  if (official) {
    await official.deleteOne();
    res.json({ message: 'Official removed' });
  } else {
    res.status(404);
    throw new Error('Official not found');
  }
});

module.exports = {
  getOfficials,
  getOfficialById,
  createOfficial,
  updateOfficial,
  deleteOfficial,
};
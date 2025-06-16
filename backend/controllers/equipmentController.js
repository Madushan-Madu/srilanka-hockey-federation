const asyncHandler = require('express-async-handler');
const Equipment = require('../models/Equipment');

// @desc    Get all equipment listings
// @route   GET /api/equipment
// @access  Public
const getEquipment = asyncHandler(async (req, res) => {
  // Optional: Add filters based on category from req.query
  const category = req.query.category;
  let query = {};
  if (category) {
    query.category = category;
  }

  const equipment = await Equipment.find(query).sort({ createdAt: -1 });
  res.json(equipment);
});

// @desc    Get a single equipment listing by ID
// @route   GET /api/equipment/:id
// @access  Public
const getEquipmentById = asyncHandler(async (req, res) => {
  const equipment = await Equipment.findById(req.params.id);

  if (equipment) {
    res.json(equipment);
  } else {
    res.status(404);
    throw new Error('Equipment not found');
  }
});

// @desc    Create a new equipment listing
// @route   POST /api/equipment
// @access  Private/Admin (or potentially public with review)
const createEquipment = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    category,
    price,
    condition,
    imageUrl,
    sellerName,
    sellerPhone,
    sellerEmail,
    sellerSocialMedia,
  } = req.body;

  const equipment = new Equipment({
    name,
    description,
    category,
    price,
    condition,
    imageUrl,
    sellerName,
    sellerPhone,
    sellerEmail,
    sellerSocialMedia,
  });

  const createdEquipment = await equipment.save();
  res.status(201).json(createdEquipment);
});

// @desc    Update an equipment listing
// @route   PUT /api/equipment/:id
// @access  Private/Admin
const updateEquipment = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    category,
    price,
    condition,
    imageUrl,
    sellerName,
    sellerPhone,
    sellerEmail,
    sellerSocialMedia,
  } = req.body;

  const equipment = await Equipment.findById(req.params.id);

  if (equipment) {
    equipment.name = name || equipment.name;
    equipment.description = description || equipment.description;
    equipment.category = category || equipment.category;
    equipment.price = price || equipment.price;
    equipment.condition = condition || equipment.condition;
    equipment.imageUrl = imageUrl || equipment.imageUrl;
    equipment.sellerName = sellerName || equipment.sellerName;
    equipment.sellerPhone = sellerPhone || equipment.sellerPhone;
    equipment.sellerEmail = sellerEmail || equipment.sellerEmail;
    equipment.sellerSocialMedia = sellerSocialMedia || equipment.sellerSocialMedia;

    const updatedEquipment = await equipment.save();
    res.json(updatedEquipment);
  } else {
    res.status(404);
    throw new Error('Equipment not found');
  }
});

// @desc    Delete an equipment listing
// @route   DELETE /api/equipment/:id
// @access  Private/Admin
const deleteEquipment = asyncHandler(async (req, res) => {
  const equipment = await Equipment.findById(req.params.id);

  if (equipment) {
    await equipment.deleteOne();
    res.json({ message: 'Equipment listing removed' });
  } else {
    res.status(404);
    throw new Error('Equipment not found');
  }
});

module.exports = {
  getEquipment,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};
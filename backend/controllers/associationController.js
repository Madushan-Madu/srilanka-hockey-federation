const asyncHandler = require('express-async-handler');
const Association = require('../models/Association');

// @desc    Get all associations
// @route   GET /api/associations
// @access  Public
const getAssociations = asyncHandler(async (req, res) => {
  const associations = await Association.find({}).sort({ name: 1 });
  res.json(associations);
});

// @desc    Get a single association by ID
// @route   GET /api/associations/:id
// @access  Public
const getAssociationById = asyncHandler(async (req, res) => {
  const association = await Association.findById(req.params.id);

  if (association) {
    res.json(association);
  } else {
    res.status(404);
    throw new Error('Association not found');
  }
});

// @desc    Create a new association
// @route   POST /api/associations
// @access  Private/Admin
const createAssociation = asyncHandler(async (req, res) => {
  const { name, yearFounded, description, logoUrl, contactEmail, contactPhone, website } = req.body;

  const association = new Association({
    name,
    yearFounded,
    description,
    logoUrl,
    contactEmail,
    contactPhone,
    website,
  });

  const createdAssociation = await association.save();
  res.status(201).json(createdAssociation);
});

// @desc    Update an association
// @route   PUT /api/associations/:id
// @access  Private/Admin
const updateAssociation = asyncHandler(async (req, res) => {
  const { name, yearFounded, description, logoUrl, contactEmail, contactPhone, website } = req.body;

  const association = await Association.findById(req.params.id);

  if (association) {
    association.name = name || association.name;
    association.yearFounded = yearFounded || association.yearFounded;
    association.description = description || association.description;
    association.logoUrl = logoUrl || association.logoUrl;
    association.contactEmail = contactEmail || association.contactEmail;
    association.contactPhone = contactPhone || association.contactPhone;
    association.website = website || association.website;

    const updatedAssociation = await association.save();
    res.json(updatedAssociation);
  } else {
    res.status(404);
    throw new Error('Association not found');
  }
});

// @desc    Delete an association
// @route   DELETE /api/associations/:id
// @access  Private/Admin
const deleteAssociation = asyncHandler(async (req, res) => {
  const association = await Association.findById(req.params.id);

  if (association) {
    await association.deleteOne();
    res.json({ message: 'Association removed' });
  } else {
    res.status(404);
    throw new Error('Association not found');
  }
});

module.exports = {
  getAssociations,
  getAssociationById,
  createAssociation,
  updateAssociation,
  deleteAssociation,
};
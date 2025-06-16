const express = require('express');
const {
  getAssociations,
  getAssociationById,
  createAssociation,
  updateAssociation,
  deleteAssociation,
} = require('../controllers/associationController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getAssociations).post(protect, admin, createAssociation);
router
  .route('/:id')
  .get(getAssociationById)
  .put(protect, admin, updateAssociation)
  .delete(protect, admin, deleteAssociation);

module.exports = router;
const express = require('express');
const {
  getEquipment,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} = require('../controllers/equipmentController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getEquipment).post(protect, admin, createEquipment); // Consider if create should be admin-only or open for community submissions
router
  .route('/:id')
  .get(getEquipmentById)
  .put(protect, admin, updateEquipment)
  .delete(protect, admin, deleteEquipment);

module.exports = router;
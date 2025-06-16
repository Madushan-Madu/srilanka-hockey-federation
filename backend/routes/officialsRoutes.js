const express = require('express');
const {
  getOfficials,
  getOfficialById,
  createOfficial,
  updateOfficial,
  deleteOfficial,
} = require('../controllers/officialsController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getOfficials).post(protect, admin, createOfficial);
router
  .route('/:id')
  .get(getOfficialById)
  .put(protect, admin, updateOfficial)
  .delete(protect, admin, deleteOfficial);

module.exports = router;
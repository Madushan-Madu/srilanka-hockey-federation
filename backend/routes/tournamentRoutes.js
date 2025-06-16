const express = require('express');
const {
  getTournaments,
  getTournamentById,
  createTournament,
  updateTournament,
  deleteTournament,
} = require('../controllers/tournamentController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getTournaments).post(protect, admin, createTournament);
router
  .route('/:id')
  .get(getTournamentById)
  .put(protect, admin, updateTournament)
  .delete(protect, admin, deleteTournament);

module.exports = router;
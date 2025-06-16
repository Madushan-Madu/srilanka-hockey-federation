const asyncHandler = require('express-async-handler');
const Tournament = require('../models/Tournament');

// @desc    Get all tournaments
// @route   GET /api/tournaments
// @access  Public
const getTournaments = asyncHandler(async (req, res) => {
  const tournaments = await Tournament.find({}).sort({ startDate: -1 });
  res.json(tournaments);
});

// @desc    Get a single tournament by ID
// @route   GET /api/tournaments/:id
// @access  Public
const getTournamentById = asyncHandler(async (req, res) => {
  const tournament = await Tournament.findById(req.params.id);

  if (tournament) {
    res.json(tournament);
  } else {
    res.status(404);
    throw new Error('Tournament not found');
  }
});

// @desc    Create a new tournament
// @route   POST /api/tournaments
// @access  Private/Admin
const createTournament = asyncHandler(async (req, res) => {
  const { name, description, startDate, endDate, location, recentWinners, imageUrl } = req.body;

  const tournament = new Tournament({
    name,
    description,
    startDate,
    endDate,
    location,
    recentWinners,
    imageUrl,
  });

  const createdTournament = await tournament.save();
  res.status(201).json(createdTournament);
});

// @desc    Update a tournament
// @route   PUT /api/tournaments/:id
// @access  Private/Admin
const updateTournament = asyncHandler(async (req, res) => {
  const { name, description, startDate, endDate, location, recentWinners, imageUrl } = req.body;

  const tournament = await Tournament.findById(req.params.id);

  if (tournament) {
    tournament.name = name || tournament.name;
    tournament.description = description || tournament.description;
    tournament.startDate = startDate || tournament.startDate;
    tournament.endDate = endDate || tournament.endDate;
    tournament.location = location || tournament.location;
    tournament.recentWinners = recentWinners || tournament.recentWinners;
    tournament.imageUrl = imageUrl || tournament.imageUrl;

    const updatedTournament = await tournament.save();
    res.json(updatedTournament);
  } else {
    res.status(404);
    throw new Error('Tournament not found');
  }
});

// @desc    Delete a tournament
// @route   DELETE /api/tournaments/:id
// @access  Private/Admin
const deleteTournament = asyncHandler(async (req, res) => {
  const tournament = await Tournament.findById(req.params.id);

  if (tournament) {
    await tournament.deleteOne();
    res.json({ message: 'Tournament removed' });
  } else {
    res.status(404);
    throw new Error('Tournament not found');
  }
});

module.exports = {
  getTournaments,
  getTournamentById,
  createTournament,
  updateTournament,
  deleteTournament,
};
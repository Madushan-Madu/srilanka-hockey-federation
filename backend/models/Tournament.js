const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    recentWinners: [
      {
        year: { type: Number, required: true },
        team: { type: String, required: true },
      },
    ],
    imageUrl: {
      type: String,
      required: false, // Optional image for the tournament
    },
  },
  {
    timestamps: true,
  }
);

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
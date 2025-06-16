const mongoose = require('mongoose');

const associationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    yearFounded: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: false, // Optional logo for the association
    },
    contactEmail: {
      type: String,
      required: false,
    },
    contactPhone: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Association = mongoose.model('Association', associationSchema);

module.exports = Association;
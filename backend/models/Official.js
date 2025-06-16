const mongoose = require('mongoose');

const officialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Current Official', 'Executive Committee'],
      required: true,
    },
    imageUrl: {
      type: String,
      required: false, // Placeholder for image
    },
    socialMedia: [
      {
        platform: { type: String, enum: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'] },
        url: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Official = mongoose.model('Official', officialSchema);

module.exports = Official;
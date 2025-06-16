const mongoose = require('mongoose');

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false, // Optional image for the news article
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['National Team News', 'Tournament Update', 'Association News', 'General'],
      default: 'General',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // If you have an admin user managing news
      required: false, // Make false if news can be added without admin login
    },
    // For "Recent Updates" filtering
    isRecentUpdate: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model('News', newsSchema);

module.exports = News;
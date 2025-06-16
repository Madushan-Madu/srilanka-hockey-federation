const mongoose = require('mongoose');

const equipmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Hockey Sticks', 'Goalkeeper Gear', 'Kits', 'Training Tools', 'Accessories', 'Other'],
      required: true,
    },
    price: {
      type: Number,
      required: false, // Price can be optional if it's 'contact seller for price'
    },
    condition: {
      type: String,
      enum: ['New', 'Used - Like New', 'Used - Good', 'Used - Fair'],
      required: false,
    },
    imageUrl: {
      type: String,
      required: true, // Product image is crucial
    },
    sellerName: {
      type: String,
      required: true,
    },
    sellerPhone: {
      type: String,
      required: true,
    },
    sellerEmail: {
      type: String,
      required: false,
    },
    sellerSocialMedia: {
      type: String, // Link to seller's social media (e.g., Facebook profile)
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
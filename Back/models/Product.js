const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    powerPeak: {
      type: Number,
      enum: [440, 580, 630],
      required: true,
    },
    orientation: {
      type: String,
      enum: ['N', 'E', 'S', 'W'],
      required: true,
    },
    inclination: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      required: true,
    },
    electricityGenerated: {
      type: Number,
      default: 0,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);

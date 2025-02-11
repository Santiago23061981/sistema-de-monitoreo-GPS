const mongoose = require('mongoose');

const TrackerSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tracker', TrackerSchema);
const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  trackerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tracker' },
  geofenceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Geofence' },
  message: String,
  alertDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', AlertSchema);
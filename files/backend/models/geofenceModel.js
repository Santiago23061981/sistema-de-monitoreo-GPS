const mongoose = require('mongoose');

const GeofenceSchema = new mongoose.Schema({
  name: String,
  coordinates: [{ latitude: Number, longitude: Number }],
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Geofence', GeofenceSchema);
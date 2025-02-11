const Geofence = require('../models/geofenceModel');

exports.getGeofences = async (req, res) => {
  try {
    const geofences = await Geofence.find();
    res.json(geofences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createGeofence = async (req, res) => {
  const geofence = new Geofence(req.body);
  try {
    const newGeofence = await geofence.save();
    res.status(201).json(newGeofence);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
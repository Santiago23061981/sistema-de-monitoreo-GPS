const Alert = require('../models/alertModel');

exports.getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().populate('trackerId geofenceId');
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAlert = async (req, res) => {
  const alert = new Alert(req.body);
  try {
    const newAlert = await alert.save();
    res.status(201).json(newAlert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
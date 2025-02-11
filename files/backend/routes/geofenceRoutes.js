const express = require('express');
const router = express.Router();
const geofenceController = require('../controllers/geofenceController');

router.get('/', geofenceController.getGeofences);
router.post('/', geofenceController.createGeofence);

module.exports = router;
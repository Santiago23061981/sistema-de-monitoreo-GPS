const express = require('express');
const router = express.Router();
const trackerController = require('../controllers/trackerController');

router.get('/', trackerController.getTrackers);
router.post('/', trackerController.createTracker);
router.get('/:trackerId/history', trackerController.getTrackerHistory);

module.exports = router;
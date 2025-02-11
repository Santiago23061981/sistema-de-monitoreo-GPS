const Tracker = require('../models/trackerModel');
const parseNMEA = require('../protocols/nmeaParser');
const handleGSMGPRS = require('../protocols/gsmGprsHandler');
const handleMQTT = require('../protocols/mqttHandler');
const handleHTTP = require('../protocols/httpHandler');
const parseTK103 = require('../protocols/tk103Handler');
const parseConcox = require('../protocols/concoxHandler');
const parseJimi = require('../protocols/jimiHandler');

exports.getTrackers = async (req, res) => {
  try {
    const trackers = await Tracker.find();
    res.json(trackers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTracker = async (req, res) => {
  let trackerData;
  switch(req.headers['protocol-type']) {
    case 'NMEA':
      trackerData = parseNMEA(req.body.data);
      break;
    case 'GSM/GPRS':
      trackerData = handleGSMGPRS(req.body);
      break;
    case 'MQTT':
      trackerData = handleMQTT(req.body.topic, req.body.message);
      break;
    case 'HTTP':
      trackerData = handleHTTP(req, res);
      break;
    case 'TK103':
      trackerData = parseTK103(req.body.data);
      break;
    case 'Concox':
      trackerData = parseConcox(req.body.data);
      break;
    case 'Jimi':
      trackerData = parseJimi(req.body.data);
      break;
    default:
      return res.status(400).json({ message: 'Unsupported protocol' });
  }

  const tracker = new Tracker(trackerData);
  try {
    const newTracker = await tracker.save();
    res.status(201).json(newTracker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTrackerHistory = async (req, res) => {
  const { trackerId } = req.params;
  try {
    const history = await Tracker.find({ _id: trackerId }).sort({ timestamp: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
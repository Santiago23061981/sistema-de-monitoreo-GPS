const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const trackerRoutes = require('./routes/trackerRoutes');
const geofenceRoutes = require('./routes/geofenceRoutes');
const alertRoutes = require('./routes/alertRoutes');
const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use('/api/trackers', trackerRoutes);
app.use('/api/geofences', geofenceRoutes);
app.use('/api/alerts', alertRoutes);

mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
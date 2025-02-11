const handleHTTP = (req, res) => {
  const { latitude, longitude, timestamp } = req.body;
  return {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
    timestamp: new Date(timestamp)
  };
};

module.exports = handleHTTP;
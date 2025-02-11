const handleGSMGPRS = (data) => {
  // Implement GSM/GPRS handling logic here
  // Example: Parse data from a GSM/GPRS device
  return {
    latitude: parseFloat(data.latitude),
    longitude: parseFloat(data.longitude),
    timestamp: new Date(data.timestamp)
  };
};

module.exports = handleGSMGPRS;
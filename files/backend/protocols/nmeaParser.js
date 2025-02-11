const parseNMEA = (nmeaString) => {
  const nmeaArray = nmeaString.split(',');
  // Basic example for parsing GPGGA sentence
  if (nmeaArray[0] === '$GPGGA') {
    return {
      latitude: parseFloat(nmeaArray[2]),
      longitude: parseFloat(nmeaArray[4]),
      timestamp: new Date(),
      altitude: parseFloat(nmeaArray[9])
    };
  }
  // Add more NMEA sentence parsing as needed
  return null;
};

module.exports = parseNMEA;
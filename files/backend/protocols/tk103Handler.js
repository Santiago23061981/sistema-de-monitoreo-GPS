const parseTK103 = (data) => {
  const dataArray = data.split(',');
  // Basic example for parsing TK103 protocol data
  return {
    latitude: parseFloat(dataArray[2]),
    longitude: parseFloat(dataArray[4]),
    timestamp: new Date()
  };
};

module.exports = parseTK103;
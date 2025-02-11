const parseJimi = (data) => {
  const dataArray = data.split(',');
  // Basic example for parsing Jimi protocol data
  return {
    latitude: parseFloat(dataArray[2]),
    longitude: parseFloat(dataArray[4]),
    timestamp: new Date(dataArray[8])
  };
};

module.exports = parseJimi;
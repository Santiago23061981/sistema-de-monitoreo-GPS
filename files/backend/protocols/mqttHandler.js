const mqtt = require('mqtt');

const handleMQTT = (topic, message) => {
  // Implement MQTT message handling logic here
  const payload = JSON.parse(message.toString());
  return {
    latitude: payload.latitude,
    longitude: payload.longitude,
    timestamp: new Date(payload.timestamp)
  };
};

const mqttClient = mqtt.connect('mqtt://broker.hivemq.com');

mqttClient.on('connect', () => {
  mqttClient.subscribe('gps/tracker', (err) => {
    if (!err) {
      console.log('Subscribed to MQTT topic');
    }
  });
});

mqttClient.on('message', (topic, message) => {
  const data = handleMQTT(topic, message);
  // Save data to the database or process it as needed
});

module.exports = mqttClient;
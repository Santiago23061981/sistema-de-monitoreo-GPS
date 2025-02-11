import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function TrackerMap() {
  const [trackers, setTrackers] = useState([]);

  useEffect(() => {
    fetch('/api/trackers')
      .then(response => response.json())
      .then(data => setTrackers(data));
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {trackers.map(tracker => (
        <Marker key={tracker._id} position={[tracker.latitude, tracker.longitude]}>
          <Popup>
            {tracker.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default TrackerMap;
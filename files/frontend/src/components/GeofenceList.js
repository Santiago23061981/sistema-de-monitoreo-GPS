import React, { useEffect, useState } from 'react';

function GeofenceList() {
  const [geofences, setGeofences] = useState([]);

  useEffect(() => {
    fetch('/api/geofences')
      .then(response => response.json())
      .then(data => setGeofences(data));
  }, []);

  return (
    <div>
      <h2>Geofence List</h2>
      <ul>
        {geofences.map(geofence => (
          <li key={geofence._id}>{geofence.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GeofenceList;
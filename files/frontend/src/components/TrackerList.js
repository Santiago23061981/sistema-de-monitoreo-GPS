import React, { useEffect, useState } from 'react';

function TrackerList() {
  const [trackers, setTrackers] = useState([]);

  useEffect(() => {
    fetch('/api/trackers')
      .then(response => response.json())
      .then(data => setTrackers(data));
  }, []);

  return (
    <div>
      <h2>Tracker List</h2>
      <ul>
        {trackers.map(tracker => (
          <li key={tracker._id}>{tracker.name} - {tracker.latitude}, {tracker.longitude}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrackerList;
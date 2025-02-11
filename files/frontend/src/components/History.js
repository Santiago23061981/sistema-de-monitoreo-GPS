import React, { useEffect, useState } from 'react';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('/api/trackers/:trackerId/history')
      .then(response => response.json())
      .then(data => setHistory(data));
  }, []);

  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map(entry => (
          <li key={entry._id}>{entry.timestamp} - {entry.latitude}, {entry.longitude}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
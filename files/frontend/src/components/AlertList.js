import React, { useEffect, useState } from 'react';

function AlertList() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch('/api/alerts')
      .then(response => response.json())
      .then(data => setAlerts(data));
  }, []);

  return (
    <div>
      <h2>Alert List</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert._id}>{alert.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlertList;
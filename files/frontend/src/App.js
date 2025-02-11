import React from 'react';
import TrackerList from './components/TrackerList';
import TrackerMap from './components/TrackerMap';
import GeofenceList from './components/GeofenceList';
import AlertList from './components/AlertList';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <h1>GPS Tracking System</h1>
      <TrackerList />
      <TrackerMap />
      <GeofenceList />
      <AlertList />
      <History />
    </div>
  );
}

export default App;
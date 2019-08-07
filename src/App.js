import React from 'react';

import './resources/styles.css';
import Header from './components/header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';

function App() {
  return (
    <div style={{ height: '1500px', backgroundColor: 'cornflowerblue' }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
    </div>
  );
}

export default App;

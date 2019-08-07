import React from 'react';

import './resources/styles.css';
import Header from './components/header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';

function App() {
  return (
    <div style={{ height: '1500px', backgroundColor: 'cornflowerblue' }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
      <Pricing />
    </div>
  );
}

export default App;

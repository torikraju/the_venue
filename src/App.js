import React from 'react';
import { Element } from 'react-scroll';

import './resources/styles.css';
import Header from './components/header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/footer';

function App() {
  return (
    <div style={{ height: '1500px', backgroundColor: 'cornflowerblue' }}>
      <Header />
      <Element name="Featured">
        <Featured />
      </Element>
      <Element name="VenueInfo">
        <VenueInfo />
      </Element>
      <Element name="Highlights">
        <Highlights />
      </Element>
      <Element name="Pricing">
        <Pricing />
      </Element>
      <Element name="Location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

import './resources/styles.css';
import Header from './components/header';
import Featured from './components/featured';

function App() {
  return (
    <div style={{ height: '1500px', backgroundColor: 'cornflowerblue' }}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;

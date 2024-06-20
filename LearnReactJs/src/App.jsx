import React from 'react';
import './App.css';
import WelcomePrint from './welcome.jsx'; // Adjust the path based on your file structure
import ButtonEvent from './ButtonEvent.jsx';

function App() {
  return (
    <div className="App">
      <WelcomePrint />
      <ButtonEvent/>
  
    </div>
  );
}

export default App;

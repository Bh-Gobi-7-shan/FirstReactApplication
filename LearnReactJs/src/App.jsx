import React from 'react';
import './App.css';
import WelcomePrint from './welcome.jsx'; // Adjust the path based on your file structure
import ButtonEvent from './ButtonEvent.jsx';
import Hi from './Components/HiClass.jsx';

function App() {
  

  return (
    <div className="App">
      <WelcomePrint />
      <ButtonEvent />
      <Hi />
    </div>
  );
}

export default App;

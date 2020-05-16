import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className="App">
      <Homepage theme={theme} changeTheme={setTheme} ><button>Click me!</button></Homepage>
    </div>
  );
}

export default App;

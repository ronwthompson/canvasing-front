import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Canvasing App!
        </p>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </header>
    </div>
  );
}

export default App;

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
        <Link to="/takeNotes">Create New Note</Link>
        <Link to="/viewNotes">View All Notes</Link>
      </header>
    </div>
  );
}

export default App;

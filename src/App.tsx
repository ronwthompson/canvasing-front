import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="page">
      <header className="page-header">
        <p>
          Canvasing App!
        </p>
        <Link to="/takeNotes" className="page-link">Create New Note</Link>
        <Link to="/viewNotes" className="page-link">View All Notes</Link>
      </header>
    </div>
  );
}

export default App;

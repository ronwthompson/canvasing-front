import React from "react";
import { Link } from "react-router-dom";

const ViewNotesPage = () => {
  return (
    <div id="view-notes-page">
      Hello!
      <Link to="/takeNotes">Create Note</Link>
    </div>
  );
}

export default ViewNotesPage;

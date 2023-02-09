import React from "react";
import { Link } from "react-router-dom";

const TakeNotesPage = () => {
  return (
    <div id="take-notes-page">
      <form>
        <label>Name:</label>
        <input required type="text" placeholder="Name" />
        <label>Email:</label>
        <input type="email" />
        <label>Notes:</label>
        <textarea placeholder="Notes" />
        <input type="submit" value="Submit" />
      </form>
      <Link to="/viewNotes">View All Notes</Link>
    </div>
  );
}

export default TakeNotesPage;

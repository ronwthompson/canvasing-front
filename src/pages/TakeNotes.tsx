import React from "react";
import { Link } from "react-router-dom";

const TakeNotesPage = () => {
  const submitForm = (e) => {
    e.preventDefault()

    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.notes.value)

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      notes: e.target.notes.value
    }

    fetch('http://127.0.0.1:3001/saveNote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div id="take-notes-page">
      <form onSubmit={submitForm}>
        <label>Name:</label>
        <input required type="text" placeholder="Name" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Notes:</label>
        <textarea placeholder="Notes" name="notes" />
        <input type="submit" value="Submit" />
      </form>
      <Link to="/viewNotes">View All Notes</Link>
    </div>
  );
}

export default TakeNotesPage;

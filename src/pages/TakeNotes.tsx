import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function validateEmail(string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(string);
}

const TakeNotesPage = () => {
  const [emailString, setEmailString] = useState("");
  const [hasEmailError, setHasEmailError] = useState(false);
  const onChangeHandler = event => {
    const currentEmailString = event.target.value;
    setEmailString(currentEmailString);
    if (hasEmailError && validateEmail(currentEmailString)) {
      setHasEmailError(false);
    }
  };
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();

    if(validateEmail(e.target.email.value)){
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        notes: e.target.notes.value
      };
  
      fetch('http://127.0.0.1:3001/saveNote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then((data) => {
          navigate('/viewNotes');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setHasEmailError(true);
    }
  }

  return (
    <div className="page" id="take-notes-page">
      <form onSubmit={submitForm}>
        <div>
          <label className="page-text">Name:</label>
          <input required type="text" placeholder="Name" name="name" />
        </div>
        <div>
          <label className="page-text">Email:</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Email"
            onChange={onChangeHandler}
            value={emailString}
          />
          {
            hasEmailError &&
            <span className="error">⚠️</span>
          }
        </div>
        <div>
          <label className="page-text">Notes:</label>
          <textarea placeholder="Notes" name="notes" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/viewNotes" className="page-link">View All Notes</Link>
    </div>
  );
}

export default TakeNotesPage;

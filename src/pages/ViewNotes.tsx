import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Note = {
  id: string,
  name: string,
  email: string,
  notes: string
}

const ViewNotesPage = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    fetch('http://127.0.0.1:3001/viewNotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllNotes(data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="page">
      {
        isFetching ?
        <div className="page-text">Loading</div> : 
        <div id="view-notes-page">
          <table className="page-table">
            <thead>
              <tr>
                <th className="page-text">Name</th>
                <th className="page-text">Email</th>
                <th className="page-text">Notes</th>
              </tr>
            </thead>
            <tbody>
              {
                allNotes.map((note: Note) => 
                  <tr id={note.id} key={note.id}>
                    <td className="page-text">{note.name}</td>
                    <td className="page-text">{note.email}</td>
                    <td className="page-text">{note.notes}</td>
                  </tr>            
                )
              }
            </tbody>
          </table>
        </div>
      }
      <Link to="/takeNotes" className="page-link">Create New Note</Link>
    </div>
  );
}

export default ViewNotesPage;

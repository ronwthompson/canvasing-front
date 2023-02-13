import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Note = {
  id: string,
  name: string,
  email: string,
  notes: string
}

const ViewNotesPage = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [allNotes, setAllNotes] = useState([])

  useEffect(() => {
    setIsFetching(true)
    fetch('http://127.0.0.1:3001/viewNotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success!');
        setAllNotes(data)
        setIsFetching(false)
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsFetching(false)
      });
  }, [])

  return (
    <div>
    {
      isFetching ?
      <div>Loading</div> : 
      <div id="view-notes-page">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {
            allNotes.map((note: Note) => 
              <tr id={note.id} key={note.id}>
                <td>{note.name}</td>
                <td>{note.email}</td>
                <td>{note.notes}</td>
              </tr>            
            )
          }
        </tbody>
      </table>
      <Link to="/takeNotes">Create Note</Link>
    </div>
    }
    </div>
  );
}

export default ViewNotesPage;

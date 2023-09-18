import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from './components/Count'

const App = (props) => {
  const [notes, setNotes] = useState([]); // Corrected the function name to setNotes

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNotes(id) {

    setNotes(preValue => {
      return [...preValue.filter((note, index) => index !== id)]
    })

  }
  return (
    <div>
      <Header />
      <Count count={notes.length === 0 ? "Empty" : `Showing ${notes.length} Notes Database`} />

      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          Title={note.Title}
          Content={note.Content}
          // activating deleted

          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default App;

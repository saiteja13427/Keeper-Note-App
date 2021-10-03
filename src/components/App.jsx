import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //React useState hook to maintain array of notes
  const [notes, setNotes] = useState([]);

  //Function to add notes to the state
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]; //Using spread operator and previousNotes array and adding new note to it
    });
  }

  //Function to delete Notes from the notes state
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* Maping through notes list and rendering all the notes */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

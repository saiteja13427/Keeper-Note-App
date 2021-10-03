import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  //Hook for tracking the state of every new note
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //A hook and functions to achieve the expandable text area
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpand() {
    setIsExpanded(true);
  }
  function handleCollapse() {
    setIsExpanded(false);
  }
  

  //A function to handle change in text inputs and change the state variables accordingly
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  //A function to handle the note submission
  function submitNote(event) {
    //adding note by passing the values of text inputs to App.jsx using addNote function passed through React Props
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    //Prevent default to prevent the form from reloading the page
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {/* Rendering the title input field only if text area is clicked to achieve expand effect */}
        {isExpanded && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleExpand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?3:1}   
          // Giving 3 rows if the text area is clicked orelse 1 to achieve expand effect
        />
        {/* Zoom is a zoom effect for the floating action button taken from material ui */}
        <Zoom in={isExpanded}>
        {/* Fab is a floaing action button from mui */}
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

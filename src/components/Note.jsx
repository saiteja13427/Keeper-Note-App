import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  //A function to delete the note by passing the note id to a delete note function in App.jsx via react props
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* Delete icon is an icon from materials icons */}
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;

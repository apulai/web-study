import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { TurnedIn } from "@material-ui/icons";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpanded(false);
    event.preventDefault();
  }

  function handleExpand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          onClick={handleExpand}
          value={note.title}
          placeholder="Title"
        />

        {isExpanded === true ? (
          <div>
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={isExpanded === true ? 3 : 1}
            />
            <Zoom in={isExpanded}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
{
}

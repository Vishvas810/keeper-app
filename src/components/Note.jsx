import React from "react";

function Note(props) {
  const handleDelete = () => {
    props.onNoteDelete(props.id);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  return (
    <div className="note">
      <h1>{props.title || "Untitled Note"}</h1>
      <p>{props.content}</p>
      <div className="note-footer">
        <span className="note-date">
          <i className="fas fa-clock"></i>{" "}
          {formatDate(props.timestamp || new Date())}
        </span>
        <button onClick={handleDelete} title="Delete note">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Note;

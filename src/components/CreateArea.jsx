import React, { useState } from "react";

function CreateArea({ onNotesChange }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleClick(event) {
    event.preventDefault();
    onNotesChange(title, content);

    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

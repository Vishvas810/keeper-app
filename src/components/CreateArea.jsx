import React, { useState } from "react";

function CreateArea({ onNotesChange }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    if (title.trim() || content.trim()) {
      onNotesChange(title, content);
      setTitle("");
      setContent("");
      setIsExpanded(false);
    }
  }

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (!title && !content) {
      setIsExpanded(false);
    }
  };

  return (
    <div className="create-area">
      <form onSubmit={handleClick}>
        <input
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Note title..."
          required={content.trim() !== ""}
        />
        <textarea
          name="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Take a note..."
          rows={isExpanded ? "4" : "3"}
          required={title.trim() !== ""}
        />
        <button type="submit" disabled={!title.trim() && !content.trim()}>
          <i className="fas fa-plus"></i>
          Add Note
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNotesChange = (title, content) => {
    const newNote = {
      noteTitle: title,
      noteContent: content,
      timestamp: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const handleNoteDelete = (id) => {
    const filteredNotes = notes.filter((_, index) => index !== id);
    setNotes(filteredNotes);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.noteTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.noteContent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="main-container">
        <CreateArea onNotesChange={handleNotesChange} />

        {notes.length > 0 && (
          <div className="search-container">
            <div className="stats-bar">
              <span className="note-count">
                <i className="fas fa-sticky-note"></i>
                {notes.length} note{notes.length !== 1 ? "s" : ""} total
              </span>
            </div>
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {searchTerm && (
              <p className="search-results">
                Found {filteredNotes.length} note
                {filteredNotes.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        )}

        {notes.length === 0 ? (
          <div className="empty-state">
            <i className="fas fa-sticky-note"></i>
            <h2>No notes yet</h2>
            <p>Create your first note to get started!</p>
          </div>
        ) : filteredNotes.length === 0 && searchTerm ? (
          <div className="empty-state">
            <i className="fas fa-search"></i>
            <h2>No notes found</h2>
            <p>Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="notes-container">
            {filteredNotes.map((obj, index) => (
              <Note
                key={index}
                id={notes.findIndex((note) => note === obj)}
                title={obj.noteTitle}
                content={obj.noteContent}
                timestamp={obj.timestamp}
                onNoteDelete={handleNoteDelete}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

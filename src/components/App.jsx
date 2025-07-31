import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const handleNotesChange = (title, content) => {
    setNotes([...notes, { noteTitle: title, noteContent: content }]);
  };

  return (
    <div>
      <Header />
      <CreateArea onNotesChange={handleNotesChange} />
      {notes.length > 0 &&
        notes.map((obj) => (
          <Note key={1} title={obj.noteTitle} content={obj.noteContent} />
        ))}

      <Footer />
    </div>
  );
}

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { useEffect, useState } from "react";
import { NoteItem } from "./components/NoteList";


function App() {
  const [notes, setNotes] = useState<Array<NoteItem>>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  useEffect(() => {
    const storedData = localStorage.getItem('notes');
    
    if(!storedData) return
    const parsedData = JSON.parse(storedData)
    if(parsedData.length <= 0) return
    setNotes(parsedData);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  const addNoteHandler = (note: NoteItem) => {
    setNotes((prevNotes) => [note, ...prevNotes]);
  };

  const deleteNoteHandler = (id: number) => {
    setNotes((prevNotes) => [...prevNotes].filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <Header setIsFormVisible={setIsFormVisible} />
      <NoteList
        onAddNote={addNoteHandler}
        onDeleteNote={deleteNoteHandler}
        onCancel={setIsFormVisible}
        isFormVisible={isFormVisible}
        notes={notes ?? []}
      />
      <Footer notesCount={notes ? notes.length : 0}/>
    </div>
  );
}

export default App;

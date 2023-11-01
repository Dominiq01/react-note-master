import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { useEffect, useState } from "react";
import { NoteItem } from "./components/NoteList";
import NoteForm from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState<Array<NoteItem>>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");
  let searchedNotes;

  searchedNotes = [...notes].filter(
    (note) =>
      note.content.includes(searchedValue) || note.title.includes(searchedValue)
  );

  useEffect(() => {
    const storedData = localStorage.getItem("notes");

    if (!storedData) return;
    const parsedData = JSON.parse(storedData);
    if (parsedData.length <= 0) return;
    setNotes(parsedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNoteHandler = (note: NoteItem) => {
    setNotes((prevNotes) => [note, ...prevNotes]);
  };

  const deleteNoteHandler = (id: number) => {
    setNotes((prevNotes) => [...prevNotes].filter((note) => note.id !== id));
  };

  const searchNoteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.target.value);
  };

  return (
    <div className="app">
      <Header
        onSearchNote={searchNoteHandler}
        setIsFormVisible={setIsFormVisible}
      />
      {isFormVisible && (
        <NoteForm onAddNote={addNoteHandler} onCancel={setIsFormVisible} />
      )}
      <NoteList
        onDeleteNote={deleteNoteHandler}
        isFormVisible={isFormVisible}
        notes={searchedValue.trim() === "" ? notes : searchedNotes}
      />
      <Footer notesCount={notes ? notes.length : 0} />
    </div>
  );
}

export default App;

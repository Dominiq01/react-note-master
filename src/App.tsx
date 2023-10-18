import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { useState } from "react";
import { NoteItem } from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Note title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus et atque, velit dolorem ullam temporibus similique facilis est placeat esse eligendi ut nesciunt, odit hic ratione minima sed. Molestias!",
      color: "#EFA7A7",
    },
    {
      id: 2,
      title: "Note title 2",
      content: "-Umyj zęby",
      color: "#EFA7A7",
    },
  ]);
  const [isFormVisible, setIsFormVisible] = useState(false);

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
        notes={notes}
      />
      <Footer notesCount={notes.length}/>
    </div>
  );
}

export default App;

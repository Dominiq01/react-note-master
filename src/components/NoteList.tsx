import React from "react";
import NoteItem from "./NoteItem";
import NoteForm from "./NoteForm";
import Draggable from "react-draggable";

export interface NoteItem {
  id: number;
  title: string;
  content: string;
  color: string;
}

interface NoteListProps {
  notes: Array<NoteItem>;
  isFormVisible: boolean;
  onCancel: (isVisible: boolean) => void;
  onAddNote: (note: NoteItem) => void;
  onDeleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  notes,
  isFormVisible,
  onCancel,
  onAddNote,
  onDeleteNote,
}) => {
  return (
    <ul className="note-list">
      {isFormVisible && <NoteForm onAddNote={onAddNote} onCancel={onCancel} />}
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          color={note.color}
          onDeleteNote={onDeleteNote}
        />
      ))}
    </ul>
  );
};

export default NoteList;

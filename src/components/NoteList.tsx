import React from "react";
import NoteItem from "./NoteItem";

export interface NoteItem {
  id: number;
  title: string;
  content: string;
  color: string;
}

interface NoteListProps {
  notes: Array<NoteItem>;
  isFormVisible: boolean;
  onDeleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  notes,
  isFormVisible,
  onDeleteNote,
}) => {
  const styles = isFormVisible
    ? {
        filter: "blur(4px)",
      }
    : {};
  return (
    <ul className="note-list" style={styles}>
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

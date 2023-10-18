import React from "react";

interface NoteItemProps {
  id: number;
  title: string;
  content: string;
  color: string;
  onDeleteNote: (id: number) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ id, title, content, color, onDeleteNote }) => {
  return (
    <li className="note-item" style={{ backgroundColor: color }}>
      <button onClick={() => onDeleteNote(id)} className="note-item__delete">❌</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
};

export default NoteItem;

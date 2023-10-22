import React from "react";
import Draggable from "react-draggable";
import IconMove from "./UI/IconMove";

interface NoteItemProps {
  id: number;
  title: string;
  content: string;
  color: string;
  onDeleteNote: (id: number) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({
  id,
  title,
  content,
  color,
  onDeleteNote,
}) => {
  return (
    <Draggable handle=".note-item__move-handle" bounds=".note-list">
      <li className="note-item" style={{ backgroundColor: color }}>
        <span className="note-item__move-handle" style={{ cursor: "move" }}>
          <IconMove />
        </span>
        <button onClick={() => onDeleteNote(id)} className="note-item__delete">
          &times;
        </button>
        <h3>{title}</h3>
        <p>{content}</p>
      </li>
    </Draggable>
  );
};

export default NoteItem;

import React, { useState } from "react";
import Button from "./Button";
import { NoteItem } from "./NoteList";
interface NoteFormProps {
  onCancel: (isVisible: boolean) => void;
  onAddNote: (note: NoteItem) => void;
}

const colors = ["#EFA7A7", "#C7EAE4", "#FFD972", "#A7E8BD", "#FCDDBC"];

const NoteForm: React.FC<NoteFormProps> = ({ onCancel, onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("red");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content || !color) return;
    console.log({ title, content, color });
    onAddNote({
      id: Date.now(),
      title,
      content,
      color,
    });

    setTitle("");
    setContent("");
    setColor("red");
    onCancel(false);
  };

  return (
    <form onSubmit={submitHandler} className="note-form">
      <label>Title:</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-form__title"
        type="text"
      />
      <label>Content:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="note-form__content"
      />
      <label>Color:</label>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="note-form__select"
        style={{ backgroundColor: color }}
      >
        {colors.map((color) => (
          <option
            key={color}
            style={{ backgroundColor: color }}
            value={color}
          />
        ))}
      </select>
      <div className="note-form__actions">
        <Button onClick={() => onCancel(false)}>Cancel</Button>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};
export default NoteForm;

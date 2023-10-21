import React, { useState } from "react";
import Button from "./Button";
import { NoteItem } from "./NoteList";
import Select from "react-select";
import { StylesConfig } from "react-select";
import ColourOption from "react-select";


interface NoteFormProps {
  onCancel: (isVisible: boolean) => void;
  onAddNote: (note: NoteItem) => void;
}
export interface ColorOption {
  readonly label: string | null;
  readonly value: string | null;
}

const colors: readonly ColorOption[] = [
  { label: "pink", value: "#EFA7A7" },
  { label: "blue", value: "#C7EAE4" },
  { label: "yellow", value: "#FFD972" },
  { label: "green", value: "#A7E8BD" },
  { label: "light-orange", value: "#FCDDBC" },
];

const NoteForm: React.FC<NoteFormProps> = ({ onCancel, onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState<ColorOption>({ label: null, value: null });

  const customTheme = (theme: any) => {
    return {
      ...theme,
      colors: {
        primary25: "black",
        primary: "#242424",
      },
    };
  };

  const colorStyles: StylesConfig<ColourOption> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: color.value ? color.value : "white",
      outline: "none",
      color: "#222222",
    }),
    option: (styles, { data }) => {
      return {
        ...styles,
        color: "transparent",
        transition: ".3s",
        //@ts-ignore
        backgroundColor: data.value,
        ":first-child": {
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
        },
        ":last-child": {
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
        },
      };
    },
    menu: (styles) => ({...styles, top: "80%"})
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content || !color.value) return;
    console.log({ title, content, color });
    onAddNote({
      id: Date.now(),
      title,
      content,
      color: color.value,
    });

    setTitle("");
    setContent("");
    setColor({ label: null, value: null });
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
      <Select
        theme={customTheme}
        placeholder={"Select color..."}
        //@ts-ignore
        options={colors}
        styles={colorStyles}
        //@ts-ignore
        onChange={setColor}
        className="note-form__select"
      />
      <div className="note-form__actions">
        <Button onClick={() => onCancel(false)}>Cancel</Button>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};
export default NoteForm;

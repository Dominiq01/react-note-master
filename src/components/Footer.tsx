import React from "react";

interface FooterProps {
  notesCount: number;
}

const Footer: React.FC<FooterProps> = ({ notesCount }) => {
  return (
    <footer className="footer">
      {notesCount <= 0 ? (
        <p>📒You don't have any notes yet, maybe add some</p>
      ) : (
        <p>
          📒Currently you have {notesCount}{" "}
          {notesCount === 1 ? "note" : "notes"}
        </p>
      )}
    </footer>
  );
};
export default Footer;

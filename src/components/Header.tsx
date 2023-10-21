import React from "react";

interface HeaderProps {
  setIsFormVisible: (isVisible: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsFormVisible }) => {
  return (
    <div className="header">
      <div className="header__title">
        <h2>Note Master</h2>
        <p>- create your personal notes</p>
      </div>
      <button onClick={() => setIsFormVisible(true)} className="button">
        + Add note
      </button>
    </div>
  );
};

export default Header;

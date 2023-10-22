import React from "react";
import Button from "./Button";
import IconSearch from "./UI/IconSearch";

interface HeaderProps {
  setIsFormVisible: (isVisible: boolean) => void;
  onSearchNote: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsFormVisible, onSearchNote }) => {

  return (
    <div className="header">
      <div className="header__btn-title-container">
        <div className="header__btn-title-container__title">
          <h2>Note Master</h2>
          <p>- create your personal notes</p>
        </div>
        <Button onClick={() => setIsFormVisible(true)}>+ Add note</Button>
      </div>
      <div className="header__searchbar-container">
        <input
          onChange={onSearchNote}
          placeholder="Search notes..."
          className="header__searchbar-container__searchbar"
          type="text"
        ></input>
        <IconSearch className="header__searchbar-container__icon" />
      </div>
    </div>
  );
};

export default Header;

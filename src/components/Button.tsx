import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, type = "button", onClick }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

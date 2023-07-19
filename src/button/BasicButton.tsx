/** @format */

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const BasicButton = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default BasicButton;

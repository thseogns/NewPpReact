/** @format */

import React from "react";
import styles from "./InfoButton.module.css";

interface ButtonProps {
  onClick?: () => void;
  linkName: string;
}

const BasicButton = ({ linkName, onClick }: ButtonProps) => {
  const links = [
    `${process.env.PUBLIC_URL}/personal/손대훈 입사지원서.pdf`,
    "https://github.com/thseogns",
  ];
  return (
    <button className={styles.buttonStyle} onClick={onClick}>
      {linkName === "자기소개서" ? (
        <a key={links[0]} href={links[0]} target="_blank" rel="noreferrer">
          {linkName}
        </a>
      ) : (
        <a key={links[1]} href={links[1]} target="_blank" rel="noreferrer">
          {linkName}
        </a>
      )}
    </button>
  );
};

export default BasicButton;

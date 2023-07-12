/** @format */

import React from "react";
import styles from "./TopButton.module.css";
interface TopButtonProps {
  name: string;
  toggleButton?: boolean;
}
const TopButton = ({ name, toggleButton }: TopButtonProps) => {
  return (
    <div
      className={styles.boxStyle}
      style={toggleButton ? { opacity: 1 } : { opacity: 0.7 }}
    >
      {name}
    </div>
  );
};

export default TopButton;

/** @format */

import React from "react";
import styles from "./TopButton.module.css";
interface TopButtonProps {
  name: string;
}
const TopButton = ({ name }: TopButtonProps) => {
  return <div className={styles.boxStyle}>{name}</div>;
};

export default TopButton;

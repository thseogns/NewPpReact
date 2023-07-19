/** @format */

import React from "react";
import styles from "./AlignInterface.module.css";
type WrapperProps = {
  children: React.ReactNode;
};
const AlignInterface = ({ children }: WrapperProps) => {
  return <div className={styles.align}>{children}</div>;
};

export default AlignInterface;

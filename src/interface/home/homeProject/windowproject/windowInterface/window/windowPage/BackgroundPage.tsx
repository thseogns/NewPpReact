/** @format */

import React from "react";
import styles from "./BackgroundPage.module.css";
type BackgroundProps = {
  children: React.ReactNode;
};
const BackgroundPage = ({ children }: BackgroundProps) => {
  return <div className={styles.scroll}>{children}</div>;
};

export default BackgroundPage;

/** @format */

import React from "react";
import styles from "./SkillSize.module.css";
interface SkillSizeProps {
  children: React.ReactNode;
}
const SkillSize = ({ children }: SkillSizeProps) => {
  return <div className={styles.size}>{children}</div>;
};

export default SkillSize;

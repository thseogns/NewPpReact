/** @format */

import React from "react";
import styles from "./SkillItem.module.css";

interface Skill {
  name: string;
}

interface SkillItemProps {
  skillName: string;
  item: Skill[];
}

const SkillItem: React.FC<SkillItemProps> = ({ skillName, item }) => {
  console.log(item);
  return (
    <div className={styles[skillName]}>
      {item.map((skill) => (
        <div className={styles.boxCover}>
          <img
            className={styles.imgStyle}
            src={`${process.env.PUBLIC_URL}/image/window/Skills/${skill.name}.png`}
            alt="skill"
          />
        </div>
      ))}
    </div>
  );
};

export default SkillItem;

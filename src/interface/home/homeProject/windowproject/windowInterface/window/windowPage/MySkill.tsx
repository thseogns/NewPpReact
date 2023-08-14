/** @format */

import React from "react";
import styles from "./MySkill.module.css";
import AlignInterface from "../../../../../../AlignInterface";
import SkillItem from "./SkillItem";
interface Skill {
  name: string;
}
const MySkill = () => {
  const skillName = ["main", "sub", "other"];
  const mainSkills = [
    { name: "html" },
    { name: "css" },
    { name: "js" },
    { name: "react" },
  ];
  const subSkills = [
    { name: "JQ" },
    { name: "sass" },
    { name: "boot" },
    { name: "java" },
  ];
  const otherSkills = [
    { name: "illust" },
    { name: "Photoshop" },
    { name: "excel" },
    { name: "indesign" },
  ];

  return (
    <div className={styles.scroll}>
      <AlignInterface>
        <SkillItem skillName={skillName[0]} item={mainSkills} />
        <SkillItem skillName={skillName[1]} item={subSkills} />
        <SkillItem skillName={skillName[2]} item={otherSkills} />
      </AlignInterface>
    </div>
  );
};

export default MySkill;

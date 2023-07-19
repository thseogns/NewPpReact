/** @format */

import React from "react";
import { Counter } from "./function/count/Counter";
import AlignInterface from "../AlignInterface";
import Resize from "./function/resize/Resize";
import SkillCover from "./SkillCover";
import SkillName from "./SkillName";
import ResizeDiagonal from "./function/resize/ResizeDiagonal";
import DragAndDrop from "./function/drag/DragAndDrop";
const Skill = () => {
  const skillName = ["Counter", "Resize", "ResizeDiagonal", "DragAndDrop"];
  return (
    <AlignInterface>
      {" "}
      <SkillCover>
        <SkillName name={skillName[0]} />
        <Counter />
      </SkillCover>{" "}
      <SkillCover>
        {" "}
        <SkillName name={skillName[1]} />
        <Resize />
      </SkillCover>
      <SkillCover>
        {" "}
        <SkillName name={skillName[2]} />
        <ResizeDiagonal />
      </SkillCover>
      <SkillCover>
        {" "}
        <SkillName name={skillName[3]} />
        <DragAndDrop />
      </SkillCover>
    </AlignInterface>
  );
};

export default Skill;

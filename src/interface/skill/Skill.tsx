/** @format */

import React from "react";
import { Counter } from "./function/count/Counter";
import AlignInterface from "../AlignInterface";
import Resize from "./function/resize/Resize";
import SkillCover from "./SkillCover";
import SkillName from "./SkillName";
import ResizeDiagonal from "./function/resize/ResizeDiagonal";
import DragAndDrop from "./function/drag/DragAndDrop";
import DropDown from "./function/dropDown/DropDown";
import SkillSize from "./SkillSize";
import Scroll from "./function/scroll/Scroll";
const Skill = () => {
  const skillName = [
    "Counter",
    "Resize",
    "ResizeDiagonal",
    "DragAndDrop",
    "DropDown",
    "Scroll",
  ];
  return (
    <AlignInterface>
      {" "}
      <SkillCover>
        <SkillName name={skillName[0]} />
        <SkillSize>
          <Counter />
        </SkillSize>
      </SkillCover>{" "}
      <SkillCover>
        {" "}
        <SkillName name={skillName[1]} />{" "}
        <SkillSize>
          <Resize />
        </SkillSize>
      </SkillCover>
      <SkillCover>
        {" "}
        <SkillName name={skillName[2]} />{" "}
        <SkillSize>
          <ResizeDiagonal />
        </SkillSize>
      </SkillCover>
      <SkillCover>
        {" "}
        <SkillName name={skillName[3]} />{" "}
        <SkillSize>
          <DragAndDrop />
        </SkillSize>
      </SkillCover>
      <SkillCover>
        {" "}
        <SkillName name={skillName[4]} />{" "}
        <SkillSize>
          <DropDown />
        </SkillSize>
      </SkillCover>
      <SkillCover>
        {" "}
        <SkillName name={skillName[5]} />{" "}
        <SkillSize>
          <Scroll />
        </SkillSize>
      </SkillCover>
    </AlignInterface>
  );
};

export default Skill;

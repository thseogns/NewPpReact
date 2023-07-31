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
import Login from "./function/login/Login";
import CountUp from "./function/countUp/CountUp";
const Skill = () => {
  const skillName = [
    "Counter",
    "Resize",
    "ResizeDiagonal",
    "DragAndDrop",
    "DropDown",
    "Scroll",
    "Login",
    "CountUp",
  ];
  return (
    <AlignInterface>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
        <SkillCover>
          {" "}
          <SkillName name={skillName[6]} />{" "}
          <SkillSize>
            <Login />
          </SkillSize>
        </SkillCover>
        <SkillCover>
          {" "}
          <SkillName name={skillName[7]} />{" "}
          <SkillSize>
            <CountUp />
          </SkillSize>
        </SkillCover>
      </div>
    </AlignInterface>
  );
};

export default Skill;

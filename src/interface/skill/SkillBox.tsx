/** @format */

import React from "react";
interface SkillBoxProps {
  children: React.ReactNode;
}
const SkillBox = ({ children }: SkillBoxProps) => {
  return <div>{children}</div>;
};

export default SkillBox;

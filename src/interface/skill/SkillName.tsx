/** @format */

import React from "react";
interface SkillNameProps {
  name: string;
}
const SkillName = ({ name }: SkillNameProps) => {
  return <h1 className="skillBackground">{name}</h1>;
};

export default SkillName;

/** @format */

import React from "react";
import AlignInterface from "../AlignInterface";
import Slick from "./slick/Slick";
import ProjectItem from "./ProjectItem";
import styles from "./Project.module.css";
const Project = () => {
  return (
    <AlignInterface>
      <div className={styles.slickCover}>
        <Slick>
          <ProjectItem />
        </Slick>
      </div>
    </AlignInterface>
  );
};

export default Project;

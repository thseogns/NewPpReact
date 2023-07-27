/** @format */

import React from "react";
import AlignInterface from "../AlignInterface";
import MyHomeMap from "./map/MyHomeMap";
import InfoBox from "./InfoBox";
import styles from "./Info.module.css";
import { BiMapAlt } from "react-icons/bi";
const Info = () => {
  return (
    <AlignInterface>
      <div className={styles.flex}>
        <InfoBox />{" "}
        <h2>
          {" "}
          <BiMapAlt />
          MyHome
        </h2>
        <div className={styles.mapCover}>
          <MyHomeMap />
        </div>
      </div>
    </AlignInterface>
  );
};

export default Info;

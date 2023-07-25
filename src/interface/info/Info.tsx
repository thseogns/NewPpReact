/** @format */

import React from "react";
import AlignInterface from "../AlignInterface";
import MyHomeMap from "./map/MyHomeMap";
import DetailInfomation from "./DetailInfomation";
import styles from "./info.module.css";
const Info = () => {
  return (
    <AlignInterface>
      <div className={styles.flex}>
        <DetailInfomation />
        <MyHomeMap />
      </div>
    </AlignInterface>
  );
};

export default Info;

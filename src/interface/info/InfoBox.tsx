/** @format */

import React from "react";
import InfoButton from "../../button/InfoButton";
import styles from "./InfoBox.module.css";

import DetailInfoBox from "./DetailInfoBox";
const InfoBox = () => {
  const linksNames = ["자기소개서", "github"];

  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.profileCover}>
          <div className={styles.circle}>
            <img
              src={`${process.env.PUBLIC_URL}/image/myinfo//picture.jpg`}
              alt="Profile"
            />
          </div>
        </div>
        <div className={styles.infoBackground}>
          <div className={styles.DetailInfoCover}>
            <DetailInfoBox />
            <p>
              좌우명: "방향이 틀리지 않는다면 언젠간 목표에 도달한다."
              <br />
              마인드: 포기하지않는 열정, 배우면된다는 마음가짐, 실수도 배움의
              일부
            </p>
          </div>
          <div className={styles.buttonLayout}>
            {linksNames.map((linkName) => (
              <InfoButton key={linkName} linkName={linkName} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;

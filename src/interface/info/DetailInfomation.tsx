/** @format */

import React from "react";
import BasicButton from "../../button/BasicButton";
import styles from "./DetailInfomation.module.css";
const DetailInfomation = () => {
  const links = ["자기소개서", "github"];
  return (
    <div>
      <div className={styles.flex}>
        <div>
          사진
          <img />
        </div>
        <div>
          <div>
            <p>정보글</p>
          </div>
          <div>
            {links.map((link) => (
              <BasicButton key={link}>
                <a>{link}</a>
              </BasicButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInfomation;

/** @format */

import React from "react";
import WindowHeader from "./WindowHeader";
import styles from "./Window.module.css";
import { pageName } from "../../../../../../features/windowSlice";
import BackgroundPage from "./windowPage/BackgroundPage";
import type { RootState } from "../../../../../../app/store";
import { useSelector } from "react-redux";
const Window = () => {
  const selectPageName = useSelector(
    (state: RootState) => state.window.windowPageName
  );
  return (
    <div className={styles.window}>
      <WindowHeader />
      {selectPageName === "바탕화면" && <BackgroundPage />}
      {/* {value === "내정보" && <MyInfo />}
      {value === "기술" && <WindowSkill />}
      {value === "프로젝트" && <MainProject />}
      {value === "서브프로젝트" && <SubProject />} */}
    </div>
  );
};

export default Window;

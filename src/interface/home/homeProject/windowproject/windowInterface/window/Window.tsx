/** @format */

import React from "react";
import WindowHeader from "./WindowHeader";
import styles from "./Window.module.css";
import { pageName } from "../../../../../../features/windowSlice";
import BackgroundPage from "./windowPage/BackgroundPage";
import type { RootState } from "../../../../../../app/store";
import { useSelector } from "react-redux";
import MemoBox from "../../../../memoBox/MemoBox";
import MySkill from "./windowPage/MySkill";
import CounterList from "../../counterList/CounterList";
const Window = () => {
  const selectPageName = useSelector(
    (state: RootState) => state.window.windowPageName
  );
  return (
    <div className={styles.window}>
      <WindowHeader />
      <BackgroundPage>
        {selectPageName === "메모장" && <MemoBox />}
        {selectPageName === "내기술" && <MySkill />}
        {selectPageName === "숫자기록" && <CounterList />}
        {/* {value === "내정보" && <MyInfo />}
      {value === "기술" && <WindowSkill />}
   
      {value === "서브프로젝트" && <SubProject />} */}
      </BackgroundPage>
    </div>
  );
};

export default Window;

/** @format */

import React from "react";
import styles from "./Background.module.css";
import StartBar from "./windowInterface/startbar/Startbar";
import FileCover from "./windowInterface/windowFile/FileCover";
import Window from "./windowInterface/window/Window";
import type { RootState } from "../../../../app/store";
import { useSelector } from "react-redux";

const Background = () => {
  const hoverElementName = useSelector((state: RootState) => state.list.hover);
  let value = useSelector((state: RootState) => state.window.windowToggle);
  const number = useSelector(
    (state: RootState) => state.window.backgroundNumber
  );
  console.log("보낸 후 의값", number);
  return (
    <div className={styles.main_back}>
      {number === 0 && (
        <img
          src={`${process.env.PUBLIC_URL}/image/window/background/win.jpg`}
          alt="Background"
        />
      )}
      {number === 1 && (
        <img
          src={`${process.env.PUBLIC_URL}/image/window/background/win2.jpg`}
          alt="Background"
        />
      )}
      {number === 2 && (
        <img
          src={`${process.env.PUBLIC_URL}/image/window/background/win3.jpg`}
          alt="Background"
        />
      )}{" "}
      <FileCover />
      {value && <Window />}
      <StartBar />
    </div>
  );
};

export default Background;

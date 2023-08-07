/** @format */

import React from "react";
import styles from "./WindowHeader.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegWindowMaximize, FaRegWindowMinimize } from "react-icons/fa";
import type { RootState } from "../../../../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { windowDisplay } from "../../../../../../features/windowSlice";
const WindowHeader = () => {
  const windowPageName = useSelector(
    (state: RootState) => state.window.windowPageName
  );
  console.log(windowPageName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(windowDisplay(false));
  };
  return (
    <div className={styles.headerCover}>
      <div className={styles.header}>
        <div className={styles.value}>{windowPageName}</div>
        <div>
          <button>
            <FaRegWindowMinimize />
          </button>
          <button>
            <FaRegWindowMaximize />
          </button>
          <button onClick={handleClick}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WindowHeader;

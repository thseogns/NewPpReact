/** @format */

import React, { useState } from "react";
import styles from "./File.module.css";
import { useDispatch } from "react-redux";
import {
  pageName,
  windowDisplay,
} from "../../../../../../features/windowSlice";
const File = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const fileName = [
    { name: "바탕화면", img: "mypc" },
    { name: "내컴퓨터", img: "net" },
    { name: "메모장", img: "memo" },
    { name: "사진폴더", img: "folder" },
    { name: "휴지통", img: "trash" },
  ];

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const patchName = e.currentTarget.getAttribute("data-name");
    console.log(patchName);
    if (patchName !== null) {
      dispatch(pageName(patchName));
      if (patchName === "바탕화면") {
        dispatch(windowDisplay(false));
        return;
      }

      dispatch(windowDisplay(true));
    }
  };
  return (
    <ul className={styles.folderCover}>
      {fileName.map((name) => (
        <li
          key={name.name}
          className={styles.folder}
          data-name={name.name}
          onClick={handleClick}
        >
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/image/window/folderImg/${name.img}.png`}
              alt="이미지"
            ></img>
            <div>{name.name}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default File;

/** @format */

import React, { useState } from "react";
import styles from "./File.module.css";

const File = () => {
  const [count, setCount] = useState(1);
  const fileName = [
    { name: "바탕화면", img: "mypc" },
    { name: "내컴퓨터", img: "net" },
    { name: "제어판", img: "pngegg" },
    { name: "사진폴더", img: "folder" },
    { name: "휴지통", img: "trash" },
  ];

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const patchName = e.currentTarget.getAttribute("data-name");
    console.log(patchName);
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

/** @format */
import React from "react";
import type { RootState } from "./app/store";
import { Link } from "react-router-dom";
import TopButton from "./button/TopButton";
import styles from "./Navigation.module.css";

import { useSelector, useDispatch } from "react-redux";
import { route } from "./features/displaySlice";

const Navigation: React.FC = () => {
  const routeDisplay = useSelector((state: RootState) => state.list.router);
  const buttonName = ["Home", "Info", "Skill", "Project"];
  const toggleButton = buttonName[routeDisplay];
  localStorage.setItem("reduxState", String(routeDisplay));
  const dispatch = useDispatch();
  const localState = localStorage.getItem("reduxState");
  console.log(localState);
  return (
    <div className={styles.flex}>
      <Link to="/" onClick={() => dispatch(route(0))}>
        <TopButton
          name={buttonName[0]}
          toggleButton={
            toggleButton === buttonName[0] || localState === buttonName[0]
          }
        />
      </Link>
      <Link to="/Info" onClick={() => dispatch(route(1))}>
        <TopButton
          name={buttonName[1]}
          toggleButton={
            toggleButton === buttonName[1] || localState === buttonName[1]
          }
        />
      </Link>
      <Link to="/Skill" onClick={() => dispatch(route(2))}>
        <TopButton
          name={buttonName[2]}
          toggleButton={
            toggleButton === buttonName[2] || localState === buttonName[2]
          }
        />
      </Link>
      <Link to="/Project" onClick={() => dispatch(route(3))}>
        <TopButton
          name={buttonName[3]}
          toggleButton={
            toggleButton === buttonName[3] || localState === buttonName[3]
          }
        />
      </Link>
    </div>
  );
};

export default Navigation;

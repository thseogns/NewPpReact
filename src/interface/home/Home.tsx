/** @format */

import React from "react";
import AlignInterface from "../AlignInterface";
import styles from "./Home.module.css";
import WeatherBoxCover from "./weatherBox/WeatherBoxCover";
import { TiWeatherPartlySunny } from "react-icons/ti";
const Home = () => {
  return (
    <AlignInterface>
      <h1 className={styles.h1Text}>
        {" "}
        <TiWeatherPartlySunny />
        Today Weather
      </h1>
      <WeatherBoxCover />
    </AlignInterface>
  );
};

export default Home;

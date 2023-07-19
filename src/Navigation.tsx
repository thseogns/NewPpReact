/** @format */
import { Link } from "react-router-dom";
import TopButton from "./button/TopButton";
import styles from "./Navigation.module.css";
import { useState } from "react";

const Navigation: React.FC = () => {
  const buttonName = ["Home", "Info", "Skill", "Project"];
  const [toggleButton, setToggleButton] = useState("Home");
  const handleToggle = (buttonName: string) => {
    console.log(buttonName);
    setToggleButton(buttonName);
  };
  return (
    <div className={styles.flex}>
      <Link to="/" onClick={() => handleToggle(buttonName[0])}>
        <TopButton
          name={buttonName[0]}
          toggleButton={toggleButton === buttonName[0]}
        />
      </Link>
      <Link to="/Info" onClick={() => handleToggle(buttonName[1])}>
        <TopButton
          name={buttonName[1]}
          toggleButton={toggleButton === buttonName[1]}
        />
      </Link>
      <Link to="/Skill" onClick={() => handleToggle(buttonName[2])}>
        <TopButton
          name={buttonName[2]}
          toggleButton={toggleButton === buttonName[2]}
        />
      </Link>
      <Link to="/Project" onClick={() => handleToggle(buttonName[3])}>
        <TopButton
          name={buttonName[3]}
          toggleButton={toggleButton === buttonName[3]}
        />
      </Link>
    </div>
  );
};

export default Navigation;

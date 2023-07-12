/** @format */
import { Link } from "react-router-dom";
import TopButton from "./button/TopButton";
import styles from "./Navigation.module.css";

const Navigation: React.FC = () => {
  const buttonName = ["Home", "Info", "Skill"];

  return (
    <div className={styles.flex}>
      <Link to="/Home">
        <TopButton name={buttonName[0]} />
      </Link>
      <Link to="/Info">
        <TopButton name={buttonName[1]} />
      </Link>
      <Link to="/Skill">
        <TopButton name={buttonName[2]} />
      </Link>
    </div>
  );
};

export default Navigation;

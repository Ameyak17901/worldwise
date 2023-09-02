import styles from "./Logo.module.css";
import Homepage from "../pages/Homepage";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" element={<Homepage />}>
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;

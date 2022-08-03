import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import PickerScreen from "./screens/PickerScreen";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PickerScreen />
    </div>
  );
};

export default Home;

import styles from "../styles/Home.module.scss";

import type { NextPage } from "next";
import Header from "../src/components/Header";
import DesktopPopUp from "../src/components/DesktopPopUp";

const Home: NextPage = () => {
  return (
    <>
      <DesktopPopUp />
      <div className={styles.layout}>
        <Header />
      </div>
    </>
  );
};

export default Home;

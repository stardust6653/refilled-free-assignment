import styles from "../styles/Shop.module.scss";

import React from "react";
import Header from "../src/components/Header";

const shop = () => {
  return (
    <>
      <Header />
      <div className={styles.copy}>
        사이토카인. <br />
        <span>완벽한 탈모케어를 위한 선택</span>
      </div>
    </>
  );
};

export default shop;

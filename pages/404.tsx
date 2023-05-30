import styles from "../styles/_404.module.scss";

import React from "react";
import DesktopPopUp from "../src/components/DesktopPopUp";
import Header from "../src/components/Header";
import Link from "next/link";

const _404 = () => {
  return (
    <>
      <DesktopPopUp />
      <div className={styles.layout}>
        <Header />
        <div className={styles._404}>
          <p className={styles.logo}>Refilled</p>
          <p>앗! 페이지가 없어요. :(</p>
          <Link href={"/shop"} className={styles.link}>
            👉 물건 구매하러 가기
          </Link>
        </div>
      </div>
    </>
  );
};

export default _404;

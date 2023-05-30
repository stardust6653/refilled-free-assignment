import styles from "../styles/Home.module.scss";

import type { NextPage } from "next";
import Header from "../src/components/Header";
import DesktopPopUp from "../src/components/DesktopPopUp";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <DesktopPopUp />
      <div className={styles.layout}>
        <Header />
        <div className={styles.component}>
          <p className={styles.intro}>
            안녕하세요. <br /> FE지원자 박소예입니다!
          </p>
          <Link href={"/shop"} className={styles.link}>
            👉 샵으로 가기
          </Link>
          <Link href={"/shop"} className={styles.link}>
            👉 장바구니로 가기
          </Link>
          <p className={styles.subInfo}>
            위 헤더의 아이콘을 통해서도 이동 가능합니다. :)
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

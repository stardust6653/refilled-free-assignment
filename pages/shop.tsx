import styles from "../styles/Shop.module.scss";

import Image from "next/image";
import React from "react";

const shop = () => {
  return (
    <>
      <div className={styles.component}>
        <div className={styles.status}>
          <Image
            className={styles.time}
            src="/../public/assets/time.png"
            alt="9시 41분"
            width={28.43}
            height={11.09}
          />
          <Image
            className={styles.side}
            src="/../public/assets/top-side.png"
            alt="상단 사이드 바"
            width={66.6}
            height={11.34}
          />
        </div>
        <header>
          <nav>
            <Image
              src="/../public/assets/menu.png"
              alt="메뉴로 가기"
              width={40}
              height={40}
            />
          </nav>
          {/* <h1 className="hiddin">Refilled</h1> */}
          <div className={styles.logo}>
            <Image
              src="/../public/assets/logo.png"
              alt="Refilled"
              width={100}
              height={24}
            />
          </div>

          <div className={styles.cart}>
            <Image
              src="/../public/assets/cart.png"
              alt="장바구니로 가기"
              width={22}
              height={21}
            />
          </div>
        </header>
      </div>
    </>
  );
};

export default shop;

import styles from "../../styles/Header.module.scss";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className={styles.component}>
        <header>
          <Link href="/shop">
            <nav>
              <Image
                src="/../public/assets/menu.png"
                alt="메뉴로 가기"
                width={40}
                height={40}
              />
            </nav>
          </Link>
          {/* <h1 className="hiddin">Refilled</h1> */}
          <div className={styles.logo}>
            <Image
              src="/../public/assets/logo.png"
              alt="Refilled"
              width={100}
              height={24}
            />
          </div>

          <Link href="/cart">
            <div className={styles.cart}>
              <Image
                src="/../public/assets/cart.png"
                alt="장바구니로 가기"
                width={22}
                height={21}
              />
            </div>
          </Link>
        </header>
      </div>
    </>
  );
};

export default Header;

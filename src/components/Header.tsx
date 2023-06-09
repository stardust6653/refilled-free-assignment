import styles from "../../styles/Header.module.scss";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

import logo from "../../public/assets/logo.png";
import cart from "../../public/assets/cart.png";
import menu from "../../public/assets/menu.png";

const Header = () => {
  const [cartAmount, setCartAmount] = useState<number | null>(null);
  const updateData = useSelector((state: RootState) => state.updateData.value);

  useEffect(() => {
    const item: string | null = localStorage.getItem("cart");

    if (item !== null) {
      const data = JSON.parse(item);
      if (data.length !== 0) {
        setCartAmount(data.length);
      }
      if (data.length === 0) {
        setCartAmount(null);
      }
    }
  }, [updateData]);

  return (
    <>
      <div className={styles.component}>
        <header>
          <Link href="/shop">
            <nav>
              <Image src={menu} alt="메뉴로 가기" width={40} height={40} />
            </nav>
          </Link>

          <Link href={"/"}>
            <div className={styles.logo}>
              <Image src={logo} alt="Refilled" width={100} height={24} />
            </div>
          </Link>

          <Link href="/cart">
            <div className={styles.cart}>
              <Image src={cart} alt="장바구니로 가기" width={22} height={21} />
              {cartAmount && <span className={styles.badge}>{cartAmount}</span>}
            </div>
          </Link>
        </header>
      </div>
    </>
  );
};

export default Header;

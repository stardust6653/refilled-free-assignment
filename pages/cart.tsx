import styles from "../styles/Cart.module.scss";

import React, { useEffect, useState } from "react";

import Header from "../src/components/Header";
import CartItemList from "../src/components/CartItemList";
import BuyBtn from "../src/components/BuyBtn";
import DesktopPopUp from "../src/components/DesktopPopUp";

import { DataProps } from "../src/types/types";

const Cart = () => {
  const [storageData, setStorageData] = useState<DataProps[] | null>(null);

  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    const data: string | null = localStorage.getItem("cart");
    if (data !== null) {
      const local: DataProps[] | [] = JSON.parse(data);
      setStorageData(local);
    }
  }, [click]);

  return (
    <>
      <DesktopPopUp />
      <div className={styles.component}>
        <Header />
        {storageData && storageData.length !== 0 ? (
          <CartItemList list={storageData} setClick={setClick} />
        ) : (
          <div className={styles.noCart}>
            <p className={styles.logo}>Refilled</p>
            <p className={styles.content}>
              장바구니에 담긴 제품이 없습니다. <br />
              제품을 추가해 보세요.
            </p>
          </div>
        )}
        {storageData ? (
          <BuyBtn list={storageData} />
        ) : (
          <BuyBtn list={undefined} />
        )}
      </div>
    </>
  );
};

export default Cart;

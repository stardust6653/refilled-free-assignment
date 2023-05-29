import styles from "../styles/Cart.module.scss";

import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";
import CartItemList from "../src/components/CartItemList";
import SellBtn from "../src/components/SellBtn";

const Cart = () => {
  const [storageData, setStorageData] = useState<any>(null);
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    const data: any = localStorage.getItem("cart");
    const local = JSON.parse(data);
    setStorageData(local);
  }, [click]);

  return (
    <div className={styles.component}>
      <Header />
      {storageData && storageData.length !== 0 ? (
        <CartItemList list={storageData} setClick={setClick} />
      ) : (
        <p className={styles.noCart}>장바구니가 비었어요</p>
      )}
      {storageData ? <SellBtn list={storageData} /> : <SellBtn />}
    </div>
  );
};

export default Cart;

import styles from "../styles/Cart.module.scss";

import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";
import CartItemList from "../src/components/CartItemList";
import BuyBtn from "../src/components/BuyBtn";

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
        <div className={styles.noCart}>
          <p className={styles.logo}>Refilled</p>
          <p className={styles.content}>
            장바구니에 담긴 제품이 없습니다. <br />
            제품을 추가해 보세요.
          </p>
        </div>
      )}
      {storageData ? <BuyBtn list={storageData} /> : <BuyBtn />}
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";
import CartItemList from "../src/components/CartItemList";
import SellBtn from "../src/components/SellBtn";

const Cart = () => {
  const [storageData, setStorageData] = useState(null);

  useEffect(() => {
    const data: any = localStorage.getItem("cart");
    const local = JSON.parse(data);
    setStorageData(local);
  }, []);

  return (
    <>
      <Header />
      {storageData ? (
        <CartItemList list={storageData} />
      ) : (
        <p>장바구니가 비었어요</p>
      )}
      {storageData ? <SellBtn list={storageData} /> : <SellBtn />}
    </>
  );
};

export default Cart;

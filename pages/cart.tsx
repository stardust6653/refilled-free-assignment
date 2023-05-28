import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";
import CartItemList from "../src/components/CartItemList";

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
    </>
  );
};

export default Cart;

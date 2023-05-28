import styles from "../../styles/CartItemList.module.scss";

import React, { useState } from "react";
import CartItem from "./CartItem";

const CartItemList = ({ list, setClick }: any) => {
  const [items, setItems] = useState(list);

  const removeItem = (id: number) => {
    const removeList = items.filter((item: any) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(removeList));
    setItems(removeList);
    setClick((prev: boolean) => !prev);
  };

  return (
    <div className={styles.cartList}>
      {items.map((item: any) => {
        return <CartItem key={item.id} info={item} remove={removeItem} />;
      })}
    </div>
  );
};

export default CartItemList;

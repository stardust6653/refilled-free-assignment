import styles from "../../styles/CartItemList.module.scss";

import React, { useState } from "react";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { update } from "../features/updateData/updateDataSlice";

const CartItemList = ({ list, setClick }: any) => {
  const [items, setItems] = useState(list);
  const dispatch = useDispatch();

  const removeItem = (id: number) => {
    const removeList = items.filter((item: any) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(removeList));
    setItems(removeList);
    setClick((prev: boolean) => !prev);
    dispatch(update());
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

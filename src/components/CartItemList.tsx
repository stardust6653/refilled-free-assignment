import styles from "../../styles/CartItemList.module.scss";

import React, { useState } from "react";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { update } from "../features/updateData/updateDataSlice";
import { DataProps } from "../types/types";

const CartItemList = ({
  list,
  setClick,
}: {
  list: DataProps[];
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [items, setItems] = useState(list);
  const dispatch = useDispatch();

  const removeItem = (id: number): void => {
    const removeList = items.filter((item: DataProps) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(removeList));
    setItems(removeList);
    setClick((prev) => !prev);
    dispatch(update());
  };

  return (
    <div className={styles.cartList}>
      {items.map((item: DataProps) => {
        return <CartItem key={item.id} info={item} removeItem={removeItem} />;
      })}
    </div>
  );
};

export default CartItemList;

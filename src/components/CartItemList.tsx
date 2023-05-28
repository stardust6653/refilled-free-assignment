import styles from "../../styles/CartItemList.module.scss";

import React from "react";
import CartItem from "./CartItem";

const CartItemList = ({ list }: any) => {
  return (
    <div className={styles.cartList}>
      {list.map((item: any) => {
        return <CartItem key={item.id} info={item} />;
      })}
    </div>
  );
};

export default CartItemList;

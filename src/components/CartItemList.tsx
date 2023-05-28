import React from "react";
import CartItem from "./CartItem";

const CartItemList = ({ list }: any) => {
  console.log("아이템 리스트", list);
  return (
    <div>
      {list.map((item: any) => {
        return <CartItem key={item.id} info={item} />;
      })}
    </div>
  );
};

export default CartItemList;

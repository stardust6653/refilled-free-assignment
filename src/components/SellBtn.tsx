import styles from "../../styles/SellBtn.module.scss";

import React from "react";

const SellBtn = ({ list }: any) => {
  let total = 0;

  const totalPrice = () => {
    if (list !== undefined) {
      list.map((item: any) => {
        total += item.price;
      });
    }

    return total.toLocaleString("es-Us");
  };

  return (
    <div className={styles.component}>
      <div className={styles.sellBtn}>
        {list !== undefined ? list.length : 0}개 | {totalPrice()}원 구매하기
      </div>
    </div>
  );
};

export default SellBtn;

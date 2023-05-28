import styles from "../../styles/SellBtn.module.scss";

import React from "react";

const SellBtn = ({ list }: any) => {
  console.log(list);

  return (
    <div className={styles.component}>
      <div className={styles.sellBtn}>5개 | 100,000원 구매하기</div>
    </div>
  );
};

export default SellBtn;

import styles from "../../styles/SelectOption.module.scss";
import { RiArrowDownSLine } from "react-icons/ri";

import React, { useState } from "react";

const SelectOption = () => {
  const [option, setOption] = useState("옵션 선택");
  const arr = ["A", "B", "C"];

  return (
    <div className={styles.selectOptionComponent}>
      <h3>헤어 리커버리 사이토카인 키트</h3>
      <div className={styles.optionBox}>
        <button className={styles.optionResult}>
          {option}
          <RiArrowDownSLine />
        </button>
        <div className={styles.selectBox}>
          {arr.map((item, i) => {
            return (
              <button
                className={styles.option}
                key={i}
                onClick={(item) => {
                  setOption(item.currentTarget.innerText);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <button className={styles.cartBtn}>장바구니 담기</button>
    </div>
  );
};

export default SelectOption;

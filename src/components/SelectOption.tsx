import styles from "../../styles/SelectOption.module.scss";
import { RiArrowDownSLine } from "react-icons/ri";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const SelectOption = () => {
  const [option, setOption] = useState("옵션 선택");

  const optionData = useSelector(
    (state: RootState) => state.optionData.value
  ).payload;

  return (
    <div className={styles.selectOptionComponent}>
      <h3>{optionData.name}</h3>
      {optionData.productOptions.length > 0 ? (
        <div className={styles.optionBox}>
          <button className={styles.optionResult}>
            {option}
            <RiArrowDownSLine />
          </button>
          <div className={styles.selectBox}>
            {optionData.productOptions.map((item: any) => {
              return (
                <button
                  className={styles.option}
                  key={item["id"]}
                  onClick={() => {
                    setOption(item["name"]);
                  }}
                >
                  {item["name"]}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={styles.optionBox}>
          <button className={styles.noOptions}>옵션 없음</button>
          <div className={styles.empty}></div>
        </div>
      )}
      <button className={styles.cartBtn}>장바구니 담기</button>
    </div>
  );
};

export default SelectOption;

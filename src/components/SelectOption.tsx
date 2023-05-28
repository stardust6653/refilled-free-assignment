import styles from "../../styles/SelectOption.module.scss";
import { RiArrowDownSLine } from "react-icons/ri";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import Alert from "./alert";

import { off } from "../features/modal/modalSlice";

const SelectOption = () => {
  const dispatch = useDispatch();

  const [option, setOption] = useState("옵션 선택");
  const [popUp, setPopUp] = useState(false);

  const optionData = useSelector(
    (state: RootState) => state.optionData.value
  ).payload;

  const localData = localStorage.getItem("cart");

  const optionResult = () => {
    if (option === "옵션 없음") {
      return "옵션 없음";
    } else {
      return option;
    }
  };

  const data: any = {
    id: optionData.id,
    imageUrl: optionData.imageUrl,
    name: optionData.name,
    originPrice: optionData.originPrice,
    price: optionData.price,
    tag: optionData.tag,
    productOptions: optionResult(),
    desc: optionData.desc,
  };

  const addCart = () => {
    if (localData === null) {
      localStorage.setItem("cart", JSON.stringify([data]));
    } else {
      if (JSON.parse(localStorage.cart) !== undefined) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...JSON.parse(localStorage.cart), data])
        );
      }
    }
  };

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
                  key={item.id}
                  onClick={() => {
                    setOption(item.name);
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
          <button
            className={styles.noOptions}
            onClick={() => {
              setOption("옵션 없음");
            }}
          >
            옵션 없음
          </button>
          <div className={styles.empty}></div>
        </div>
      )}
      <button
        className={styles.cartBtn}
        onClick={() => {
          if (option !== "옵션 선택") {
            addCart();

            dispatch(off());

            document.body.style.overflow = "scroll";
            sessionStorage.clear();
          } else {
            setPopUp(true);
            setTimeout(() => setPopUp(false), 2000);
          }
        }}
      >
        장바구니 담기
      </button>
      {popUp && <Alert />}
    </div>
  );
};

export default SelectOption;

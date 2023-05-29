import styles from "../../styles/SelectOption.module.scss";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

import { off } from "../features/modal/modalSlice";
import { update } from "../features/updateData/updateDataSlice";
import { toast } from "react-toastify";
import { CardItemProps, DataProps } from "../types/types";

const SelectOption = () => {
  const dispatch = useDispatch();

  const [option, setOption] = useState<string>("옵션 선택");
  const [popUp, setPopUp] = useState<boolean>(false);

  const optionData = useSelector(
    (state: RootState) => state.optionData.value
  ).payload;

  const localData: string | null = localStorage.getItem("cart");

  const optionResult = (): string => {
    if (option === "옵션 없음") {
      return "옵션 없음";
    } else {
      return option;
    }
  };

  const data: DataProps = {
    id: optionData.id,
    imageUrl: optionData.imageUrl,
    name: optionData.name,
    originPrice: optionData.originPrice,
    price: optionData.price,
    tag: optionData.tag,
    productOption: optionResult(),
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
          <button
            className={styles.optionResult}
            onClick={() => {
              setPopUp((prev) => !prev);
            }}
          >
            {option}
            {popUp ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
          </button>
          {popUp ? (
            <div className={styles.selectBox}>
              {optionData.productOptions.map((item: CardItemProps) => {
                return (
                  <button
                    className={styles.option}
                    key={item.id}
                    onClick={() => {
                      setOption(item.name);
                      setPopUp(false);
                    }}
                  >
                    {item["name"]}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className={styles.empty}></div>
          )}
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
            dispatch(update());
            document.body.style.overflow = "scroll";
            toast("장바구니에 물건이 담겼어요!");
          } else {
            toast("옵션을 선택해주세요!");
          }
        }}
      >
        장바구니 담기
      </button>
    </div>
  );
};

export default SelectOption;

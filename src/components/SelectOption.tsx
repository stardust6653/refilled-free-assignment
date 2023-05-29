import styles from "../../styles/SelectOption.module.scss";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

import { off } from "../features/modal/modalSlice";
import { update } from "../features/updateData/updateDataSlice";
import { ToastContainer, toast } from "react-toastify";

interface DataProps {
  id: number;
  imageUrl: string;
  name: string;
  originPrice: number;
  price: number;
  tag: { color: string; text: string };
  productOptions: string;
  desc: string;
}

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

  const data: DataProps = {
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
              {optionData.productOptions.map((item: any) => {
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

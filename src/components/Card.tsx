import styles from "../../styles/Card.module.scss";

import Image from "next/image";
import React from "react";

import { useDispatch } from "react-redux";
import { on } from "../features/modal/modalSlice";
import { add } from "../features/optionData/optionDataSlice";
import { CardItemProps } from "../types/types";

const Card = ({ cardInfo }: { cardInfo: CardItemProps }) => {
  const discountRate: number = Math.round(
    ((cardInfo.originPrice - cardInfo.price) / cardInfo.originPrice) * 100
  );

  const dispatch = useDispatch();

  const color: string = cardInfo.tag.color;

  return (
    <li
      className={styles.card}
      onClick={() => {
        dispatch(on());
        dispatch(add(cardInfo));
        document.body.style.overflow = "hidden";
      }}
    >
      <Image src={cardInfo.imageUrl} alt="" width={168} height={168} />
      {cardInfo.tag && (
        <span
          className={`${styles.badge} ${color === "blue" && styles.blue} ${
            color === "gray" && styles.gray
          }`}
        >
          {cardInfo.tag.text}
        </span>
      )}
      <h3 className={styles.name}>{cardInfo.name}</h3>
      <p className={styles.description}>{cardInfo.desc}</p>
      <del className={styles.del}>
        {cardInfo.originPrice.toLocaleString("es-Us")}원
      </del>
      <p className={styles.priceGroup}>
        <span className={styles.accent}>{discountRate}%</span>
        <span className={styles.price}>
          {cardInfo.price.toLocaleString("es-Us")}원
        </span>
      </p>
    </li>
  );
};

export default Card;

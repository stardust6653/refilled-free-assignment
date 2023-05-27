import styles from "../../styles/Card.module.scss";

import Image from "next/image";
import React, { useState } from "react";
import { DataProps } from "../../pages/shop";
import { useDispatch } from "react-redux";
import { on } from "../features/modal/modalSlice";

const Card = ({
  imageUrl,
  name,
  originPrice,
  price,
  tag,
  desc,
  productOptions,
}: DataProps) => {
  const discountRate = Math.round(((originPrice - price) / originPrice) * 100);
  const dispatch = useDispatch();

  const color = tag.color;

  return (
    <li
      className={styles.card}
      onClick={() => {
        dispatch(on());
      }}
    >
      <Image src={imageUrl} alt="" width={168} height={168} />
      {tag && (
        <span
          className={`${styles.badge} ${color === "blue" && styles.blue} ${
            color === "gray" && styles.gray
          }`}
        >
          {tag.text}
        </span>
      )}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{desc}</p>
      <del className={styles.del}>{originPrice.toLocaleString("es-Us")}원</del>
      <p className={styles.priceGroup}>
        <span className={styles.accent}>{discountRate}%</span>
        <span className={styles.price}>{price.toLocaleString("es-Us")}원</span>
      </p>
    </li>
  );
};

export default Card;

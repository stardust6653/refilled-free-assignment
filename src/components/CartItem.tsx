import styles from "../../styles/CartItem.module.scss";

import React from "react";
import Image from "next/image";

import { VscChromeClose } from "react-icons/vsc";

const CartItem = ({ info, remove }: any) => {
  const discountRate = Math.round(
    ((info.originPrice - info.price) / info.originPrice) * 100
  );

  return (
    <div className={styles.component}>
      <Image src={info.imageUrl} alt={info.name} width={60} height={60} />
      <div className={styles.infoBox}>
        <div className={styles.infoGroup}>
          <div className={styles.descriptionsBox}>
            {info.tag && (
              <span
                className={`${styles.badge} ${
                  info.tag.color === "blue" && styles.blue
                } ${info.tag.color === "gray" && styles.gray}`}
              >
                {info.tag.text}
              </span>
            )}

            <div className={styles.name}>{info.name}</div>
            <div className={styles.desc}>{info.desc}</div>
          </div>
        </div>
        <div className={styles.priceGroup}>
          <del className={styles.originPrice}>
            {info.originPrice.toLocaleString("es-Us")}원
          </del>
          <div className={styles.realPriceInfo}>
            <span className={styles.accent}>{discountRate}%</span>
            <span className={styles.price}>
              {info.price.toLocaleString("es-Us")}원
            </span>
          </div>
        </div>
      </div>
      <VscChromeClose
        className={styles.closeBtn}
        onClick={() => {
          const id = info.id;
          remove(id);
        }}
      />
    </div>
  );
};

export default CartItem;

import styles from "../../styles/CardList.module.scss";

import React from "react";
import { DataProps } from "../../pages/shop";
import Card from "./Card";

const CardList = ({ list }: any) => {
  return (
    <ul className={styles.cardList}>
      {list.map((item: any) => {
        return (
          <Card
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            originPrice={item.originPrice}
            price={item.price}
            tag={item.tag}
            productOptions={item.productOptions}
            desc={item.desc}
          />
        );
      })}
    </ul>
  );
};

export default CardList;

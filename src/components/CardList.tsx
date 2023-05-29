import styles from "../../styles/CardList.module.scss";

import React from "react";
import Card from "./Card";
import { CardItemProps, DataProps } from "../types/types";

const CardList = ({ list }: { list: CardItemProps[] }) => {
  return (
    <ul className={styles.cardList}>
      {list.map((item: CardItemProps) => {
        return (
          <Card
            key={item.id}
            id={item.id}
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
      {list.map((item: CardItemProps) => {
        return (
          <Card
            key={item.id}
            id={item.id}
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
      {list.map((item: CardItemProps) => {
        return (
          <Card
            key={item.id}
            id={item.id}
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

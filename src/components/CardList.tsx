import styles from "../../styles/CardList.module.scss";

import React from "react";
import Card from "./Card";
import { CardItemProps } from "../types/types";

const CardList = ({ list }: { list: CardItemProps[] }) => {
  return (
    <ul className={styles.cardList}>
      {list.map((item: CardItemProps) => {
        const cardInfo: CardItemProps = {
          id: item.id,
          imageUrl: item.imageUrl,
          name: item.name,
          originPrice: item.originPrice,
          price: item.price,
          tag: item.tag,
          productOptions: item.productOptions,
          desc: item.desc,
        };

        return <Card key={cardInfo.id} cardInfo={cardInfo} />;
      })}
    </ul>
  );
};

export default CardList;

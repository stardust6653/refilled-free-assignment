import styles from "../styles/Shop.module.scss";

import React from "react";
import Header from "../src/components/Header";
import axios from "axios";
import CardList from "../src/components/CardList";

export interface DataProps {
  id?: number;
  name: string;
  originPrice: number;
  price: number;
  tag: {
    color: string;
    text: string;
  };
  desc?: string;
  imageUrl: string;
  productOptions: {
    id: number;
    name: string;
    price: number;
    stock: number;
  }[];
  text?: string;
  color?: string;
}

const shop = ({ data }: any) => {
  return (
    <div className={styles.layout}>
      <div className={styles.component}>
        <Header />
        <div className={styles.copy}>
          사이토카인. <br />
          <span>완벽한 탈모케어를 위한 선택</span>
        </div>
        <div
          style={{
            width: "375px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardList list={data} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://file.refilled.co.kr/assignment/product.json"
  );

  return {
    props: {
      data: res.data,
    },
  };
};

export default shop;

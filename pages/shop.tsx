import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/Shop.module.scss";

import React from "react";
import axios from "axios";

import Header from "../src/components/Header";
import CardList from "../src/components/CardList";
import { useSelector } from "react-redux";
import { RootState } from "../src/app/store";
import Select from "../src/components/Select";
import { ToastContainer } from "react-toastify";

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

const Shop = ({ data }: any) => {
  const modal = useSelector((state: RootState) => state.modal.value);

  return (
    <div className={styles.layout}>
      <div className={styles.component}>
        <Header />
        <div className={styles.copy}>
          사이토카인. <br />
          <span>완벽한 탈모케어를 위한 선택</span>
        </div>
        <div className={styles.cardList}>
          <CardList list={data} />
        </div>
      </div>
      {modal && <Select />}
      <ToastContainer
        position="bottom-center"
        limit={2}
        autoClose={1000}
        hideProgressBar={true}
      />
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

export default Shop;

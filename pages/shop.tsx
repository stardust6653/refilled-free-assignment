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
import DesktopPopUp from "../src/components/DesktopPopUp";
import { CardItemProps } from "../src/types/types";

const Shop = ({ data }: { data: CardItemProps[] }) => {
  const modal = useSelector((state: RootState) => state.modal.value);

  return (
    <div className={styles.layout}>
      <DesktopPopUp />
      <div className={styles.component}>
        <Header />
        <div className={styles.copy}>
          사이토카인. <br />
          <span>완벽한 탈모케어를 위한 선택</span>
        </div>
        <div className={styles.cardList}>
          <CardList list={data} />
        </div>
        {modal && <Select />}
        <div className={styles.toastLayout}>
          <ToastContainer
            className={styles.toast}
            position="bottom-center"
            limit={2}
            autoClose={1000}
            hideProgressBar={true}
          />
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

export default Shop;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import { decrement, increment } from "../src/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../src/app/store";

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://s3.ap-northeast-2.amazonaws.com/refilled.co.kr/favicon/symbol_only.png"
        ></link>
        <title>리필드</title>
      </Head>

      <h1>Refilled Free Assignment</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        감소
      </button>
    </>
  );
};

export default Home;

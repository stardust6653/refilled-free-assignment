import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
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
    </>
  );
};

export default Home;

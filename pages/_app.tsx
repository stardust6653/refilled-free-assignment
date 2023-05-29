import styles from "../styles/Layout.module.scss";

import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { store } from "../src/app/store";
import { Provider } from "react-redux";
import Head from "next/head";
import StatusBar from "../src/components/StatusBar";

function MyApp({ Component, pageProps }: AppProps) {
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

      <Provider store={store}>
        <div className={styles.layout}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;

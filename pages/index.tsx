import type { NextPage } from "next";
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

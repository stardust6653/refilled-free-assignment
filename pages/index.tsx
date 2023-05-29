import type { NextPage } from "next";
import Header from "../src/components/Header";
import DesktopPopUp from "../src/components/DesktopPopUp";

const Home: NextPage = () => {
  return (
    <>
      <DesktopPopUp />
      <Header />
    </>
  );
};

export default Home;

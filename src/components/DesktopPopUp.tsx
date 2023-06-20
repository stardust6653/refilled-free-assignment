import styles from "../../styles/DesktopPopUp.module.scss";

import React from "react";
import Image from "next/image";

import bannerImg from "../../public/assets/desktop.png";

const DesktopPopUp = () => {
  return (
    <div className={styles.layout}>
      <Image
        src={bannerImg}
        alt="refilled 어플리케이션 광고 사이드 배너"
        width={217}
        height={350}
      />
    </div>
  );
};

export default DesktopPopUp;

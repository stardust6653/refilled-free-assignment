import styles from "../../styles/Sidebar.module.scss";

import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className={styles.component}>
      <div className={styles.status}>
        <Image
          className={styles.time}
          src="/../public/assets/time.png"
          alt="9시 41분"
          width={28.43}
          height={11.09}
        />
        <Image
          className={styles.side}
          src="/../public/assets/top-side.png"
          alt="상단 사이드 바"
          width={66.6}
          height={11.34}
        />
      </div>
    </div>
  );
};

export default Sidebar;

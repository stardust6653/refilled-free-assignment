import styles from "../../styles/Select.module.scss";

import React from "react";
import SelectOption from "./SelectOption";
import Modal from "./Modal";

const Select = () => {
  return (
    <div className={styles.selectLayout}>
      <SelectOption />
      <Modal />
    </div>
  );
};

export default Select;

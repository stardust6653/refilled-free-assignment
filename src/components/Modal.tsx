import styles from "../../styles/Modal.module.scss";

import React from "react";
import { useDispatch } from "react-redux";

import { off } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.modal}
      onClick={() => {
        dispatch(off());

        document.body.style.overflow = "scroll";
        sessionStorage.clear();
      }}
    ></div>
  );
};

export default Modal;

import React from "react";
import { useAppState } from "../../store";
import { ACTION_CLOSE_DETAIL } from "../../store/Reducers";
import Avatar from "./Avatar";
import Props from "./Props";
import styles from "./Modal.module.css";
import Episodes from "./Episodes";
import { useState } from "react";

const classes = [
  {
    modal: styles.modal,
    bg: styles.bg,
  },
  {
    modal: [styles.modal, styles.fade].join(" "),
    bg: [styles.bg, styles.fade].join(" "),
  },
];

export default function Modal({ data }) {
  const { dispatch } = useAppState();
  const [close, setClose] = useState(0);

  const closeModal = () => {
    setClose(1);
    setTimeout(() => {
      dispatch({ type: ACTION_CLOSE_DETAIL });
      setClose(0);
    }, 300);
  };

  if (data === null) return null;
  return (
    <>
      <div className={classes[close].bg} onClick={() => closeModal()}></div>
      <div className={classes[close].modal}>
        <Avatar data={data} />
        <Props data={data} />
        <Episodes data={data} />
        <button className={styles.close} onClick={() => closeModal()}>
          Close
        </button>
      </div>
    </>
  );
}

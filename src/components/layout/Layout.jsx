import React, { useEffect } from "react";
import RequestToApi from "../../request/api";
import { useAppState } from "../../store";
import { ACTION_CHANGE_ITEMS } from "../../store/Reducers";
import Card from "../card/Card";
import Filter from "../filter/Filter";
import Modal from "../modal/Modal";
import Pagination from "../pagination/Pagination";
import styles from "./Layout.module.css";



export default function Layout() {
  const { state, dispatch } = useAppState();
  useEffect(() => {
    RequestToApi(state.mainRequest).then((res) => {
      dispatch({ type: ACTION_CHANGE_ITEMS, payload: res });
    });
  }, [state.mainRequest]);

  return (
    <div className={styles.container}>
      <Filter />
      <div className={styles.grid}>
        {state.items.map((hero, i) => (
          <Card key={hero.id} delay={i * 100 + "ms"} data={hero} />
        ))}
      </div>
      <Pagination loading={state.loading}/>
      <Modal data={state.current} />
    </div>
  );
}

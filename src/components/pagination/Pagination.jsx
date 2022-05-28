import { useAppState } from "../../store";
import { ACTION_CHANGE_URL } from "../../store/Reducers";
import styles from "./Pagination.module.css";
export default function Pagination() {
  const { state, dispatch } = useAppState();
  const loadMore = () => {
    dispatch({ type: ACTION_CHANGE_URL, payload: state.info.next });
  };
  const loadBefore = () => {
    dispatch({ type: ACTION_CHANGE_URL, payload: state.info.prev });
  };
  return (
    <div className={styles.container}>
      {state.info.prev ? (
        <button className={styles.button} onClick={() => loadBefore()}>
          Before page
        </button>
      ):null}
      {state.info.next ? (
      <button className={styles.button} onClick={() => loadMore()}>
        Next page
      </button>
       ):null}
    </div>
  );
}

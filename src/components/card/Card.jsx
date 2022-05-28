import { useAppState } from "../../store";
import { ACTION_DETAIL } from "../../store/Reducers";
import styles from "./Card.module.css";

export default function Card({ data, delay }) {
  const { dispatch } = useAppState();
  const showDetail = () => {
    dispatch({ type: ACTION_DETAIL, payload: data });
  };
  const animate = { animationDelay: delay };

  return (
    <div className={styles.card} style={animate}>
      <img src={data.image} alt="" />
      <div className={styles.content}>
        <div className={[styles.status, styles[data.status]].join(" ")}>
          {data.status}
        </div>
        <h4 className={styles.name}>{data.name}</h4>
        <div className={styles.property}>
          <span className="gender">Gender: {data.gender}</span>
          <span className="type">Type: {data.type}</span>
          <span className="location">Location: {data.location.name}</span>
          <span className="origin">Origin: {data.origin.name}</span>
          <span className="species">Species: {data.species}</span>
        </div>
        <button onClick={() => showDetail()} className={styles.detail}>
          Show Detail
        </button>
      </div>
    </div>
  );
}


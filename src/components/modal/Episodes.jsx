import { useState, useEffect } from "react";
import RequestToApi from "../../request/api";
import styles from "./Modal.module.css";

export default function Episodes({ data: { episode } }) {
  return (
    <div className={[styles.block,styles.episod].join(" ")}>
        <div className={styles.propname}>Episodes:</div>
      {episode.map((item, i) => (
        <Episod key={'ep'+i} url={item} />
      ))}
    </div>
  );
}

const Episod = ({ url }) => {
  const [episod, setEpisod] = useState(null);
  useEffect(() => {
    RequestToApi(url).then((res) => setEpisod(res));
  }, [url]);
  return <div className={styles.propLine}>{episod ? episod.name : 'Loanding'}</div>;
};

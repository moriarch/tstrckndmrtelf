import styles from "./Modal.module.css";

export default function Props({ data }) {
  return (
    <div className={styles.block}>
      <div className={styles.propLine}>
        <div className={styles.propname}>Type:</div>
        {data.type}
      </div>
      <div className={styles.propLine}>
        <div className={styles.propname}>Location:</div>
        {data.location.name}
      </div>
      <div className={styles.propLine}>
        <div className={styles.propname}>Origin:</div>
        {data.origin.name}
      </div>
      <div className={styles.propLine}>
        <div className={styles.propname}>Species:</div>
        {data.species}
      </div>
    </div>
  );
}

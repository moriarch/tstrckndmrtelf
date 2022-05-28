import styles from "./Modal.module.css";
export default function Avatar({ data }) {
  return (
    <div className={[styles.block, styles.avatar].join(" ")}>
      <img src={data.image} className={styles.imagebg} alt="" />
      <img src={data.image} className={styles.imagemain} alt="" />
      <div className={styles.name}>{data.name}</div>
      <div className={styles.prop}>{data.gender}</div>
    </div>
  );
}

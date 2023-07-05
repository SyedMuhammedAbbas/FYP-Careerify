import styles from "../../styles/loader.module.css"; // Import the CSS file

export default function Loader() {
  return (
    <div className={styles.loader}>
      {" "}
      {/* Use the styles.loader class */}
      <div className={styles.d1}></div>
      <div className={styles.d2}></div>
      <div className={styles.d3}></div>
      <div className={styles.d4}></div>
      <div className={styles.d5}></div>
    </div>
  );
}

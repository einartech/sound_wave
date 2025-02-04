import styles from "./Style.module.css";

export default function H2Title({ text }) {
  return (
    <>
      <h2 className={styles.title}> {text}</h2>
    </>
  );
}

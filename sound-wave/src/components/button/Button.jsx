import style from "./Style.module.css";

export default function Button({ type, value }) {
  return (
    <>
      <input className={style.red} type={type} value={value} />
    </>
  );
}

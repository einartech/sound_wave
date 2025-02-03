import titleStyle from "./Style.module.css";


export default function Title({ text1, text2 }) {
  return (
    <>
      <span>
        <h1 className={titleStyle.title1}>{text1}&nbsp;</h1>
        <h1 className={titleStyle.title2}>{text2}</h1>
      </span>
    </>
  );
}

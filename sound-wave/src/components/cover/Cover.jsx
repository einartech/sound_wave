import style from "./Style.module.css";

export default function Cover({ img, alt, width, height }) {
  return (
    <>
      <img src={img} alt={alt} width={width} height={height} />
    </>
  );
}

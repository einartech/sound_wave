import style from "./Style.module.css"; // Importación del archivo CSS

export default function Cover({ img, alt, width, height }) {
  // Sintaxis correcta de la función
  return (
    <>
      <img src={img} alt={alt} width={width} height={height} />
    </>
  );
}

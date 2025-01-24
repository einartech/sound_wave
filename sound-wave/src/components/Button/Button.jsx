import style from "./Style.module.css"; // Importar el archivo CSS modular

export default function Button({ type, value }) {
  // Sintaxis correcta para la función del componente
  return (
    <>
      <input className={style.red} type={type} value={value} />
    </>
  );
}

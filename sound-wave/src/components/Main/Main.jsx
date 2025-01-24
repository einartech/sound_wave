   import"./Main.css"
   
  const Main = () => {
    return (
        <div className={mainContainer}>
        <section className={leftSection}>
        <h2>Sección Izquierda</h2>
        <p>Contenido de la seccion izquierda</p>
        </section>
        
        <section className={rigthSection}>
        <h2>Seccion Derecha</h2>
        <p>Contenido de la sección derecha</p>
        </section>
        </div>
    );
  };
  export default Main;
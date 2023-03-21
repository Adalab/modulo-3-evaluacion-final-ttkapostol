/* SECCIÓN DE IMPORT */
import { useEffect, useState } from "react";
import CallToApi from "../services/api";
import "../styles/App.scss";

function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [characterList, setCharacterList] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [selectHouse, setSelectHouse] = useState("Gryffindor");

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    CallToApi().then((selectedData) => {
      setCharacterList(selectedData);
      console.log(characterList);
    });
  }, []);

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div className="App">
      {
        <>
          <header className="header">
            <h1>Harry Potter</h1>
          </header>
          <main className="main"></main>
          <footer className="footer"></footer>
        </>
      }
    </div>
  );
}

/* PROP-TYPES */

export default App;

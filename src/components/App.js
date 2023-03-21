import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import CallToApi from "../services/api";

import Filters from "./Filters/Filters";
import CharacterList from "./Characters/CharacterList";

import "../styles/App.scss";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchByCharacter, setSearchByCharacter] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("Gryffindor");

  useEffect(() => {
    CallToApi(selectedHouse).then((selectedData) => {
      setCharacterList(selectedData);
    });
  }, [selectedHouse]);

  const handleSearchByCharacter = (value) => {
    setSearchByCharacter(value);
  };

  const handleSelectedHouse = (value) => {
    setSelectedHouse(value);
  };

  const filteredCharacters = characterList
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(searchByCharacter.toLowerCase());
    })
    .filter((eachCharacter) => {
      return eachCharacter.house === selectedHouse;
    });

  /* HTML */
  return (
    <div className="App">
      {
        <>
          <header className="header">
            <h1>Harry Potter</h1>
          </header>
          <main className="main">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Filters
                      searchByCharacter={searchByCharacter}
                      handleSearchByCharacter={handleSearchByCharacter}
                      handleSelectedHouse={handleSelectedHouse}
                    ></Filters>
                    <CharacterList
                      characterList={filteredCharacters}
                    ></CharacterList>
                  </>
                }
              ></Route>
            </Routes>
          </main>
          <footer className="footer"></footer>
        </>
      }
    </div>
  );
}

/* PROP-TYPES */

export default App;

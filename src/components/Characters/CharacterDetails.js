import { Link } from "react-router-dom";

function CharacterDetails({ foundCharacter }) {
  return (
    <main>
      <Link to="/">
        <button>Return</button>
      </Link>
      <article>
        <img
          src={foundCharacter.photo}
          alt={`Picture of ${foundCharacter.name}`}
          title={`Picture of ${foundCharacter.name}`}
        />
        <h2>{foundCharacter.name}</h2>
        <p>Hogwarts House: {foundCharacter.house}</p>
        <p>Status: {foundCharacter.alive ? "Alive" : "Dead"}</p>
        <p>Gender: {foundCharacter.gender}</p>
        <p>Species: {foundCharacter.species}</p>
      </article>
    </main>
  );
}

export default CharacterDetails;

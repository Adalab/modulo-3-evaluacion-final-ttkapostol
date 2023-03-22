import { Link } from "react-router-dom";
import "../../styles/layout/characterDetails.scss";

function CharacterDetails({ foundCharacter }) {
  return (
    <main className="detailsMain">
      <Link to="/">
        <button className="btn">Return to the list of Characters</button>
      </Link>
      <article className="detArticle">
        <img
          src={foundCharacter.photo}
          alt={`Picture of ${foundCharacter.name}`}
          title={`Picture of ${foundCharacter.name}`}
          className="detArticle__img"
        />
        <div className="detArticle__detDiv">
          <h2 className="detDiv__h2">{foundCharacter.name}</h2>
          <ul className="detDiv__list">
            <li className="detDiv__list--item">
              Hogwarts House: {foundCharacter.house}
            </li>
            <li className="detDiv__list--item">
              Status: {foundCharacter.status ? "Alive" : "Dead"}
            </li>
            <li className="detDiv__list--item">
              Gender: {foundCharacter.gender}
            </li>
            <li className="detDiv__list--item">
              Species: {foundCharacter.species}
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}

export default CharacterDetails;

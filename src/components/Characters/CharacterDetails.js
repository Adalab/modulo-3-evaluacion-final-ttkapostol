import { Link } from "react-router-dom";
import Gryffindor from "../../Images/CardDetails/gryffindor.png";
import Hufflepuff from "../../Images/CardDetails/hufflepuff.png";
import Ravenclaw from "../../Images/CardDetails/ravenclaw.png";
import Slytherin from "../../Images/CardDetails/slytherin.png";
import "../../styles/layout/characterDetails.scss";

function CharacterDetails({ foundCharacter }) {
  const house = () => {
    if (foundCharacter.house === "Gryffindor") {
      return (
        <img
          className="detDiv__house"
          src={Gryffindor}
          alt="Gryffindor crest"
          title="Gryffindor crest"
        />
      );
    } else if (foundCharacter.house === "Hufflepuff") {
      return (
        <img
          className="detDiv__house"
          src={Hufflepuff}
          alt="Hufflepuff crest"
          title="Hufflepuff crest"
        />
      );
    } else if (foundCharacter.house === "Ravenclaw") {
      return (
        <img
          className="detDiv__house"
          src={Ravenclaw}
          alt="Ravenclaw crest"
          title="Ravenclaw crest"
        />
      );
    } else if (foundCharacter.house === "Slytherin") {
      return (
        <img
          className="detDiv__house"
          src={Slytherin}
          alt="Slytherin crest"
          title="Slytherin crest"
        />
      );
    }
  };
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
          {house()}
          <h2 className="detDiv__h2">{foundCharacter.name}</h2>
          <ul className="detDiv__list">
            <li className="detDiv__list--item">
              Hogwarts House: {foundCharacter.house}
            </li>
            <li className="detDiv__list--item">
              Status: {foundCharacter.status ? "Alive 😊" : "Dead 💀"}
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

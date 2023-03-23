import { Link } from "react-router-dom";
import "../../styles/layout/characterCard.scss";

function CharacterCard({ eachCharacter }) {
  return (
    <Link className="link" to={`/character/${eachCharacter.id}`}>
      <li className="link__card">
        <img
          className="link__card--img"
          src={eachCharacter.photo}
          alt={`Picture of ${eachCharacter.name}`}
          title={`Picture of ${eachCharacter.name}`}
        ></img>
        <h3 className="link__card--title">{eachCharacter.name}</h3>
        <span className="link__card--span">{eachCharacter.species}</span>
      </li>
    </Link>
  );
}
export default CharacterCard;

import { Link } from "react-router-dom";
import "../../styles/layout/characterCard.scss";

function CharacterCard({ eachCharacter }) {
  return (
    <li className="card">
      <Link classname="card__link" to={`/character/${eachCharacter.id}`}>
        <img
          className="card__link--img"
          src={eachCharacter.photo}
          alt={`Picture of ${eachCharacter.name}`}
          title={`Picture of ${eachCharacter.name}`}
        ></img>
        <h3 className="card__link--title">{eachCharacter.name}</h3>
        <span className="card__link--span">{eachCharacter.species}</span>
      </Link>
    </li>
  );
}
export default CharacterCard;

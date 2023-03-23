import CharacterCard from "./CharacterCard";
import ErrorMsg from "../Errors/ErrorMsg";
import "../../styles/layout/characterList.scss";

function characterList({ filteredCharacters, searchByCharacter }) {
  if (filteredCharacters.length === 0 && searchByCharacter !== "") {
    return <ErrorMsg />;
  }

  const cardHtml = filteredCharacters.map((eachCharacter) => {
    return (
      <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });

  return (
    <section>
      <ul className="render__list">{cardHtml}</ul>
    </section>
  );
}
export default characterList;

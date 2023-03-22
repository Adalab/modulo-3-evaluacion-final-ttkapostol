import CharacterCard from "./CharacterCard";
import "../../styles/layout/characterList.scss";

function characterList({ filteredCharacters }) {
  let characterErrorMsg;
  filteredCharacters.length !== 0
    ? (characterErrorMsg = "")
    : (characterErrorMsg =
        "We don't have this character in our collection yet. But, hey, try looking in another house!");
  const cardHtml = filteredCharacters.map((eachCharacter) => {
    return (
      <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });
  return (
    <section>
      <p className="render__msg">{characterErrorMsg}</p>
      <ul className="render__list">{cardHtml}</ul>
    </section>
  );
}
export default characterList;

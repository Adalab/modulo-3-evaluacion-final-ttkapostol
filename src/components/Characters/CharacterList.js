import CharacterCard from "./CharacterCard";
import "../../styles/layout/characterList.scss";

function characterList({ characterList }) {
  const cardHtml = characterList.map((eachCharacter) => {
    return (
      <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });
  return (
    <section>
      <ul className="list">{cardHtml}</ul>
    </section>
  );
}
export default characterList;

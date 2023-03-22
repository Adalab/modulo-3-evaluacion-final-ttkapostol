import FilterByHouse from "./FilterByHouse";
import FilterByCharacter from "./FilterByCharacter";

function Filters({
  handleSearchByCharacter,
  searchByCharacter,
  handleSelectedHouse,
}) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FilterByCharacter
          handleSearchByCharacter={handleSearchByCharacter}
          searchByCharacter={searchByCharacter}
        />
        <FilterByHouse handleSelectedHouse={handleSelectedHouse} />
      </form>
    </section>
  );
}
export default Filters;

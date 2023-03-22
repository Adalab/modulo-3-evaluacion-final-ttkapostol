import FilterByHouse from "./FilterByHouse";
import FilterByCharacter from "./FilterByCharacter";

function Filters({
  handleSearchByCharacter,
  searchByCharacter,
  handleSelectedHouse,
  selectedHouse,
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
        <FilterByHouse
          handleSelectedHouse={handleSelectedHouse}
          selectedHouse={selectedHouse}
        />
      </form>
    </section>
  );
}
export default Filters;

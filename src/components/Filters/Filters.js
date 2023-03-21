import FilterByHouse from "./FilterByHouse";
import FilterByCharacter from "./FilterByCharacter";

function Filters({
  handleSearchByCharacter,
  searchByCharacter,
  handleSelectedHouse,
}) {
  return (
    <section>
      <form>
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

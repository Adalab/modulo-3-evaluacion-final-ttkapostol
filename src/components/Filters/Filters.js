import FilterByHouse from "./FilterByHouse";
import FilterByCharacter from "./FilterByCharacter";
import "../../styles/layout/filters.scss";

function Filters({
  handleSearchByCharacter,
  searchByCharacter,
  handleSelectedHouse,
  selectedHouse,
  handleReset,
}) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="filters">
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset1">
          <FilterByCharacter
            handleSearchByCharacter={handleSearchByCharacter}
            searchByCharacter={searchByCharacter}
          />
        </fieldset>
        <fieldset className="form__fieldset2">
          <FilterByHouse
            handleSelectedHouse={handleSelectedHouse}
            selectedHouse={selectedHouse}
          />
        </fieldset>
        <input
          type="button"
          value="Reset"
          className="form__resetBtn"
          onClick={handleReset}
        />
      </form>
    </section>
  );
}
export default Filters;

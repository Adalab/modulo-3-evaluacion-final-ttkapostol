function FilterByCharacter({ handleSearchByCharacter, searchByCharacter }) {
  const handleInput = (ev) => {
    const value = ev.target.value;
    handleSearchByCharacter(value);
  };

  return (
    <>
      <label className="form__label--input" htmlFor="searchByCharacter">
        Search by Character:
      </label>
      <input
        className="form__input"
        type="search"
        name="search"
        value={searchByCharacter}
        onInput={handleInput}
      />
    </>
  );
}
export default FilterByCharacter;

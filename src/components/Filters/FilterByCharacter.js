function FilterByCharacter({ handleSearchByCharacter, searchByCharacter }) {
  const handleChange = (ev) => {
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
        autoComplete="off"
        type="search"
        name="search"
        value={searchByCharacter}
        onChange={handleChange}
      />
    </>
  );
}
export default FilterByCharacter;

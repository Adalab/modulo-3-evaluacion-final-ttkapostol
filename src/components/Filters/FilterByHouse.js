function FilterByHouse({ handleSelectedHouse, selectedHouse }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleSelectedHouse(value);
  };

  return (
    <>
      <label className="form__label--select" htmlFor="houses">
        Select a Hogwarts House:
      </label>
      <select
        name="Houses"
        id="Houses"
        title="Select a Hogwarts House"
        value={selectedHouse}
        onChange={handleChange}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff </option>
        <option value="Ravenclaw">Ravenclaw </option>
        <option value="Slytherin">Slytherin </option>
      </select>
    </>
  );
}
export default FilterByHouse;

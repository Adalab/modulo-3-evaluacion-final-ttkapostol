import "../../styles/layout/filters.scss";

function FilterByHouse({ handleSelectedHouse, selectedHouse }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleSelectedHouse(value);
  };

  return (
    <>
      <label className="form__fieldset2--label" htmlFor="houses">
        Select a Hogwarts House:
      </label>
      <select
        name="Houses"
        id="Houses"
        title="Select a Hogwarts House"
        className="form__fieldset2--select"
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

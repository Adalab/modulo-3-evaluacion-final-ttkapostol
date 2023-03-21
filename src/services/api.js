const CallToApi = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const selectedData = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          house: eachCharacter.house,
          photo: eachCharacter.image,
          species: eachCharacter.species,
          id: eachCharacter.id,
        };
      });
      return selectedData;
    });
};
export default CallToApi;

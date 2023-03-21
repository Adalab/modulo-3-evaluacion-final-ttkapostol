const CallToApi = (selectedHouse) => {
  return fetch(
    `https://hp-api.onrender.com/api/characters/house/${selectedHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      const selectedData = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          house: eachCharacter.house,
          photo:
            eachCharacter.image ||
            `https://i.postimg.cc/xdLvm1T7/no-picture-1.png`,
          species: eachCharacter.species,
          status: eachCharacter.alive,
          gender: eachCharacter.gender,
          id: eachCharacter.id,
        };
      });
      return selectedData;
    });
};
export default CallToApi;

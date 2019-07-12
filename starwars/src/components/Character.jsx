import React from "react";
import PropTypes from "prop-types";

function Character({ characterData }) {
  return (
    <div className="character">
      <h3>{characterData.name}</h3>
      <p>{characterData.birth_year}</p>
      <p>{characterData.eye_color}</p>
      <p>{characterData.birth_year}</p>
      <p>{characterData.gender}</p>
      <p>{characterData.hair_color}</p>
      <p>{characterData.height}</p>
      <p>{characterData.homeworld}</p>
      <p>{characterData.mass}</p>
      <p>{characterData.skin_color}</p>
      {/* {characterData.films.map(film => (
        <p key={film}>{film}</p>
      ))}
      {characterData.species.map(speci => (
        <p key={speci}>{speci}</p>
      ))}
      {characterData.starships.map(starship => (
        <p key={starship}>{starship}</p>
      ))}
      {characterData.vehicles.map(vehicle => (
        <p key={vehicle}>{vehicle}</p>
      ))} */}
    </div>
  );
}

Character.propTypes = {
  characterData: PropTypes.shape({
    birth_year: PropTypes.string,
    created: PropTypes.string,
    edited: PropTypes.string,
    eye_color: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    height: PropTypes.string,
    homeworld: PropTypes.string,
    mass: PropTypes.string,
    name: PropTypes.string,
    skin_color: PropTypes.string,
    species: PropTypes.arrayOf(PropTypes.string),
    starships: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    vehicles: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Character;

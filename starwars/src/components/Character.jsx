import React from "react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

function Character({ characterData }) {
  return (
    <div className="character">
      <Card centered>
        <Card.Content>
          <Card.Header>{characterData.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Meta>{characterData.birth_year}</Card.Meta>
          <Card.Meta>{characterData.eye_color}</Card.Meta>
          <Card.Meta>{characterData.birth_year}</Card.Meta>
          <Card.Meta>{characterData.gender}</Card.Meta>
          <Card.Meta>{characterData.hair_color}</Card.Meta>
          <Card.Meta>{characterData.height}</Card.Meta>
          <Card.Meta>{characterData.mass}</Card.Meta>
          <Card.Meta>{characterData.skin_color}</Card.Meta>
        </Card.Content>
      </Card>
      {/* <p>{characterData.homeworld}</p> */}
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

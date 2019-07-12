import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [apiData, setApiData] = useState({
    config: {},
    data: {},
    characters: [],
    headers: {},
    status: -1,
    statusText: "",
  });
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log("response from api call: ", response);
        setApiData({
          config: response.config,
          data: response.data,
          characters: response.data.results,
          headers: response.headers,
          status: response.status,
          statusText: response.statusText,
        });
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {apiData.characters.map(character => (
        <Character key={character.name} characterData={character}/>
      ))}
    </div>
  );
};

export default App;

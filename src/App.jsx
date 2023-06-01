import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {}

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
            id="upperChart"
          >
            {puppy.name}
          </p>
        );
      })}

      <div id="lowerChart">
        {featPupId && (
          <div>
            <h2 id="pupName">{featuredPup.name}</h2>
            <ul>
              <li id="pupAge">Age: {featuredPup.age}</li>
              <li id="pupEmail">
                Email:{" "}
                <a href={`mailto:${featuredPup.email}`}>{featuredPup.email}</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

import { useMemo, useState, useId } from "react";

const HookUseMemo = () => {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);

  const planetId = useId();
  const queryId = useId();

  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { planet } = form.elements;

    handleSetPlanets(planet.value);

    form.reset();
  };

  const handleSetPlanets = (planet) => {
    console.log(planet);
    setPlanets((prevState) => {
      return [...prevState, planet];
    });
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={planetId}>Planet name</label>
        <input type="text" name="planet" id={planetId}></input>
        <button type="submit">Submit</button>
      </form>
      <label htmlFor={queryId}>Search planet</label>
      <input
        type="text"
        value={query}
        id={queryId}
        onChange={handleChange}
      ></input>
      <br></br>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    </>
  );
};

export default HookUseMemo;

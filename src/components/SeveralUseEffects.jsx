import { useEffect, useState } from "react";

const SeveralUseEffects = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};

export default SeveralUseEffects;

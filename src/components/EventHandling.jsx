import { useState } from "react";

const EventHandling = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = (e, value) => {
    console.log(e);
    console.log(value);
    setClicks(clicks + 1);
  };

  return (
    <>
      <ClickCounter
        value={clicks}
        onUpdate={(e) => handleClick(e, "some info")}
      >
        Some content
      </ClickCounter>
      <ClickCounter value={clicks} onUpdate={handleClick} />
    </>
  );
};

export default EventHandling;

import React, { useState } from "react";
import Modal from "./Modal";

// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log("Effect");
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       console.log("Clean up");
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

const DisassemblyStage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />}
    </div>
  );
};

export default DisassemblyStage;

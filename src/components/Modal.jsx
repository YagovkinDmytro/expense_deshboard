import React, { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    // Зберігаємо ідентифікатор інтервалу в змінну
    const intervalId = setInterval(() => {
      console.log("Effect");
      console.log(`Interval - ${Date.now()}`);
    }, 1000);

    return () => {
      // Очищаємо інтервал за його ідентифікатором
      console.log("Clean up");
      clearInterval(intervalId);
    };
  }, []);

  return <div>Modal</div>;
};

export default Modal;

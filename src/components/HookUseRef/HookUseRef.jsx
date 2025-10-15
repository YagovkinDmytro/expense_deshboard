import { useState, useRef, useEffect } from "react";

const HookUseRef = () => {
  const [value, setValue] = useState(0);
  const btnRef = useRef();
  const valueRef = useRef(0);

  // Буде undefined на першому рендері
  // і посиланням на DOM-елемент всі наступні
  console.log("App: ", btnRef.current);

  useEffect(() => {
    // Ефект виконується після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("btnRef in useEffect: ", btnRef.current);
    btnRef.current.focus();
    // Виконається лише один раз під час монтування.
    // Наступні оновлення значення рефа не
    // викличуть оновлення компонента
    console.log("valueRef in useEffect:", valueRef.current);
  }, []);

  const handleClick = () => {
    // Кліки будуть після монтування,
    // тому завжди буде посиланням на DOM-елемент
    valueRef.current += 1;
    console.log("handleClick: ", btnRef.current);
    console.log("handleClickValue: ", valueRef.current);
  };

  const handleClickValue = () => {
    setValue(value + 1);
  };

  return (
    <>
      <button onClick={handleClickValue}>
        Update value to trigger re-render, value: {value}
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
    </>
  );
};

export default HookUseRef;

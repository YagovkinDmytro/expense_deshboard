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
    console.log("useEffect: ", btnRef.current);
    // Виконається лише один раз під час монтування.
    // Наступні оновлення значення рефа не
    // викличуть оновлення компонента
    console.log(valueRef.current);
  });

  const handleClick = () => {
    // Кліки будуть після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("handleClick: ", btnRef.current);
    valueRef.current += 1;
  };

  return (
    <>
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
    </>
  );
};

export default HookUseRef;

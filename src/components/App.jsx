import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import UncontrolledLoginForm from "./UncontrolledLoginForm";
import SeveralUseEffects from "./SeveralUseEffects";
import SelectElement from "./SelectElement";
import SaveLocalStorage from "./SaveLocalStorage";
import RadioButtons from "./radioButtons";
import EventHandling from "./EventHandling";
import DisassemblyStage from "./DisassemblyStage";
import ControlledElements from "./ControlledElements";
import Card from "./Card";
import CheckboxElement from "./checkboxElement";
import "./App.css";

function App() {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card text="Event Handling">
        <EventHandling />
      </Card>
      <Card text="Disassembly Stage">
        <DisassemblyStage />
      </Card>
      <Card text="Several useEffects">
        {" "}
        <SeveralUseEffects />
      </Card>
      <Card text="Save Local-Storage">
        <SaveLocalStorage />
      </Card>
      <Card text="Uncontrolled LoginForm">
        <div>
          <h3>Please login to your account!</h3>
          {/* Передаємо колбек як пропс форми */}
          <UncontrolledLoginForm onLogin={handleLogin} />
        </div>
      </Card>
      <Card text="Select Element">
        <SelectElement />
      </Card>
      <Card text="Radio Buttons">
        <RadioButtons />
      </Card>
      <Card text="Controlled Elements">
        <ControlledElements />
      </Card>
      <Card text="Checkbox Element">
        <CheckboxElement />
      </Card>
    </>
  );
}

export default App;

/////////////////////////////////////// - Select Element

// import { useState } from "react";
// import SelectElement from "./SelectElement";
// import CheckboxElement from "./checkboxElement";

// const App = () => {
//   const [lang, setLang] = useState("uk");

//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <SelectElement value={lang} onSelect={setLang} />
//       <CheckboxElement />
//     </>
//   );
// };
// export default App;

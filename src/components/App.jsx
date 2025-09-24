// import { useState } from "react";
// import reactLogo from "@/assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//       <LoginForm />
//     </>
//   );
// }

// export default App;

//////////////////////////////////////////////// - Using the form

// import UncontrolledLoginForm from "./UncontrolledLoginForm";

// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = (userData) => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <UncontrolledLoginForm onLogin={handleLogin} />
//       <h2>Search</h2>
//
//     </div>
//   );
// };

// export default App;

/////////////////////////////////////// - Select Element

import { useState } from "react";
import SelectElement from "./SelectElement";

const App = () => {
  const [lang, setLang] = useState("uk");

  return (
    <>
      <p>Selected language: {lang}</p>
      <SelectElement value={lang} onSelect={setLang} />
    </>
  );
};
export default App;

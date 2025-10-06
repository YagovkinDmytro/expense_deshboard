import initialTasks from "../tasks.json";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card";
import UncontrolledLoginForm from "./UncontrolledLoginForm";
import SeveralUseEffects from "./SeveralUseEffects";
import SelectElement from "./SelectElement";
import SaveLocalStorage from "./SaveLocalStorage";
import RadioButtons from "./RadioButtons";
import EventHandling from "./EventHandling";
import DisassemblyStage from "./DisassemblyStage";
import ControlledElements from "./ControlledElements";
import CheckboxElement from "./CheckboxElement";
import ControlledLoginForm from "./ControlledLoginForm";
import TaskForm from "./TaskForm/TaskForm";
import TaskFilter from "./TaskFilter/TaskFilter";
import TaskList from "./TaskList/TaskList";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import HttpRequest from "./HttpRequest/HttpRequest";
import HookUseMemo from "./HookUseMemo/HookUseMemo";

function App() {
  const [lang, setLang] = useState("uk");
  const [tasks, setTasks] = useState(() => {
    const dataTasks = window.localStorage.getItem("tasks");
    if (dataTasks !== null) {
      return JSON.parse(dataTasks);
    }
    return initialTasks;
  });
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  useEffect(() => {
    const jsonTasks = JSON.stringify(tasks);
    window.localStorage.setItem("tasks", jsonTasks);
  }, [tasks]);

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const handleFilter = (evt) => {
    setFilter(evt.target.value);
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

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
        <p>Selected language: {lang}</p>
        <SelectElement value={lang} onSelect={setLang} />
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
      <Card text="Controlled LoginForm">
        <ControlledLoginForm />
      </Card>
      <Card text="Task manager">
        <TaskForm onAdd={addTask} />
        <TaskFilter value={filter} onFilter={handleFilter} />
        <TaskList tasks={visibleTasks} onDelete={deleteTask} />
      </Card>
      <Card text="Feedback form">
        <FeedbackForm />
      </Card>
      <Card text="Http requests">
        <HttpRequest />
      </Card>
      <Card text="Hook useMemo">
        <HookUseMemo />
      </Card>
    </>
  );
}

export default App;

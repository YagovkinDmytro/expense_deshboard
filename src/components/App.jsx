import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Home from "@/pages/Home";
import Components from "@/pages/Components";
import Hooks from "@/pages/Hooks";
import Request from "@/pages/Request";
import TaskManager from "@/pages/TaskManager";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="components" element={<Components />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="request" element={<Request />} />
          <Route path="task" element={<TaskManager />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace="true" />} />
      </Routes>
    </>
  );
}

export default App;

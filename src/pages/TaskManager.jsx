import initialTasks from "../tasks.json";
import Card from "@/components/Card";
import TaskForm from "@/components/TaskForm/TaskForm";
import TaskFilter from "@/components/TaskFilter/TaskFilter";
import TaskList from "@/components/TaskList/TaskList";
import { useEffect, useState } from "react";

function TaskManager() {
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

  return (
    <>
      <Card text="Task manager">
        <TaskForm onAdd={addTask} />
        <TaskFilter value={filter} onFilter={handleFilter} />
        <TaskList tasks={visibleTasks} onDelete={deleteTask} />
      </Card>
    </>
  );
}

export default TaskManager;

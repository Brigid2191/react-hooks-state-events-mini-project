import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const tasksToShow= tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={category}
      onSelectCategory={setCategory}/>
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={addTask}/>
      <TaskList 
      onDeleteTask={deleteTask} 
      tasks={tasksToShow}  />
    </div>
  );
}

export default App;

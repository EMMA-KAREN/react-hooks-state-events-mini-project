import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks = tasks.filter(
    (task) =>
      selectedCategory === "All" || task.category === selectedCategory
  );

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  function handleDeleteTask(taskText) {
    setTasks(tasks.filter((task) => task.text !== taskText));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

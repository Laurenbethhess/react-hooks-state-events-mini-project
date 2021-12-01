import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";



function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filter, setFilter] = useState('All')

  function handleDelete(text) {
    const filteredTasks = tasks.filter(task => task.text !== text)
    setTasks(filteredTasks)
  }

  const displayTasks = () => {
    return tasks.filter(task => {
      if (filter === 'All') {
        return true
      } else {
        return task.category === filter
      }
    })
  }

  function handleClick(e) {
    setFilter(e.target.innerText)
  }

  const onTaskFormSubmit = (event, text, category) => {
    event.preventDefault()
    setTasks([...tasks, {text: text, category: category}])

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filter={filter} categories={CATEGORIES} handleClick={handleClick} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES.filter(category => category !== 'All')}/>
      <TaskList tasks={displayTasks()} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;

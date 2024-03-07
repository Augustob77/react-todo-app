import { useState, useRef } from "react"
import { Task } from "./components/Task"

import styles from './App.module.css'

export function App() {
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])

  function handleAddTask() {
    if (!inputRef.current.value) {
      return 
    }
    
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])

    inputRef.current.value = ''
  }

  function handleCompleteTask(id) {
    const taskIndex = tasks.findIndex(item => item.id === id)

    if (taskIndex === -1) {
      return
    }

    const newTasks = [...tasks]
    newTasks[taskIndex].isCompleted = true

    setTasks(newTasks)
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}> Todo App </h1>

      <div className={styles.inputGroup}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Nome da tarefa"
        />

        <button
          className={styles.button}
          onClick={handleAddTask}
        > 
          +
        </button>
      </div>
      
      <div className={styles.tasks}>
        {tasks.map(item => (
          <Task
            key={item.id}
            task={item}
            handleCompleteTask={handleCompleteTask}
          />
        ))}
      {!tasks.length && <p>Nenhuma tareda ainda.</p>}
      </div>
    </main>
  )
}
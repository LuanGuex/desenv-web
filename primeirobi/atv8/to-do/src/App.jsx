import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask(e) {
    e.preventDefault()
    if (inputValue.trim() === '') return

    const novaTarefa = {
      id: Date.now(),
      text: inputValue.trim()
    }

    setTasks([...tasks, novaTarefa])
    setInputValue('')
  }

  function handleRemoveTask(id) {
    const novaLista = tasks.filter(task => task.id !== id)
    setTasks(novaLista)
  }

  return (
    <div id="container">
      <h1>Lista de Tarefas</h1>

      <form onSubmit={handleAddTask}>
        <label>Insira sua tarefa</label>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Criar tarefa</button>
      </form>

      <ul className="lista">
        {tasks.map(task => (
          <li key={task.id} onClick={() => handleRemoveTask(task.id)}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

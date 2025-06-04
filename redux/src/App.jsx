import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/Addtodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Redux toolkit</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App

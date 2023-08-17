import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Everyone</h1>
      <button onClick={() => {setCount(count + 1)}}>The count is {count}</button>
    </>
  )
}

export default App

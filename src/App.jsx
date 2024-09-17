import { useState } from 'react'
import Jokes from './Jokes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Jokes/>
    </>
  )
}

export default App

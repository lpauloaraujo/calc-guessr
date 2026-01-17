import './App.css'
import { useState } from 'react'
import DifficultyBar from './components/DifficultyBar'
import Score from './components/Score'

function App() {

  const [difficulty, setDifficulty] = useState('medium')

  return (
    <>
      <DifficultyBar setDifficulty={setDifficulty} />
      <p>Current difficulty: {difficulty}</p>
      <Score score={0}></Score>
    </>
  )
}

export default App
import './App.css'
import { useState } from 'react'
import DifficultyBar from './components/DifficultyBar'
import Score from './components/Score'
import AnswerOptions from './components/AnswerOptions' 
import Calculator from './components/Calculator'

function App() {

  const [difficulty, setDifficulty] = useState('medium')

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
        <DifficultyBar setDifficulty={setDifficulty} />
        <p>Current difficulty: {difficulty}</p>
        <Score score={0}></Score>
        <Calculator></Calculator>
        <AnswerOptions></AnswerOptions>
      </div>
    </>
  )
}

export default App
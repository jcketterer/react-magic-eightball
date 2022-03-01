import React, { useState } from 'react'
import './Eightball.css'
import Answers from './Answers'

const message = 'Think of a question.'
const initColor = 'black'

const Eightball = props => {
  const choice = arr => {
    const randAnswer = Math.floor(Math.random() * arr.length)
    return arr[randAnswer]
  }

  const [msg, setMsg] = useState(message)
  const [color, setColor] = useState(initColor)

  const clickHandler = () => {
    const { msg, color } = choice(Answers)
    setMsg(msg)
    setColor(color)
  }

  const restart = () => {
    setMsg(message)
    setColor(initColor)
  }

  return (
    <>
      <div className="Eightball" onClick={clickHandler} style={{ backgroundColor: color }}>
        <p>{msg}</p>
      </div>
      <button onClick={restart}>Reset</button>
    </>
  )
}

export default Eightball

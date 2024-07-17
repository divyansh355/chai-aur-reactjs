import { useState } from 'react'
import "./App.css"

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15

  function addValue() {
    console.log("Value Increased", Math.random())
    // counter += 1
    if (counter < 20) setCounter(counter + 1)
  }
  function minusValue() {
    if (counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Value++ {counter}</button>
      <br />
      <br />
      <button onClick={minusValue}>Value-- {counter}</button>
    </>
  )
}

export default App
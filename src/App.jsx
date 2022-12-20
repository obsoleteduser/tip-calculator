
import { useState } from 'react'
import './App.css'

function App() {

  const [bill, setBill] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [number, setNumber] = useState(0)
  const [total, setTotal] = useState(0)
  const [people, setPeople] = useState(0) 

  const billHandler = (event) =>{
    setBill(event.target.value)
  }


  const percentageHandler = (event) =>{
    setPercentage(event.target.value)
  }


  const numberHandler = (event) =>{
    setNumber(event.target.value)
  }



  return (
    <div className="App">
      <div className="tip-calculator">
        <h1>Tip Calculator</h1>
        <input onChange={()=>{billHandler}} type="number" className="bill" placeholder='Bill:' value={bill}/>
        <input onChange={()=>{percentageHandler}} type="number" className="tip-percentage" placeholder='Tip Percantage:' value={percentage}/>
        <input onChange={()=>{numberHandler}} type="number" className="number-of-people" placeholder='Number of People' value={number}/>
        <div className="total-tip">Total Tip: {total}</div>
        <div className="tip-per-person">Number of People: {people}</div>
      </div>
    </div>
  )
}

export default App

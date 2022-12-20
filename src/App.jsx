
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [bill, setBill] = useState()
  const [percentage, setPercentage] = useState()
  const [number, setNumber] = useState()
  const [total, setTotal] = useState()
  const [people, setPeople] = useState() 


  useEffect(()=>{
    setTotal(bill*percentage/100)
    setPeople(+(bill*percentage/100/number).toFixed(2))
  }, [bill, percentage, number])

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
        <input min={0} onChange={billHandler} type="number" className="bill" placeholder='Bill:' value={bill}/>
        <input min={0} onChange={percentageHandler} type="number" className="tip-percentage" placeholder='Tip Percantage:' value={percentage}/>
        <input min={1} onChange={numberHandler} type="number" className="number-of-people" placeholder='Number of People' value={number}/>
        <div className="total-tip">Total Tip: {total || '0'}</div>
        <div className="tip-per-person">Number of People: {people || '0'}</div>
      </div>
    </div>
  )
}

export default App

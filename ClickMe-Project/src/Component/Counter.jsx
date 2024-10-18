import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [state, setstate] = useState(0);
  return (
    <div className='counter-container'>
        
      <p id='para-id' >You have clicked {state} times</p>
      <button id='Btn' onClick={()=>{setstate(state+1)}}>Click Me</button>
    </div>
  )
}

export default Counter

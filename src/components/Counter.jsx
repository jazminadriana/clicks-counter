import React from "react";
import '../style-sheets/Counter.css';

function Counter({ clicksNumber }) {
  return (
    <div className='counter-container'>
      {clicksNumber}
    </div>
  )
}

export default Counter;
import React from 'react'
import "./Tasklist.css"

function Tasklist() {
  return (
    <div>
      <div className='task'>Tasklist</div>
   
        <div className='list'>
          <hr/>
            <ul> Pending Transactions </ul>
            <hr/>
            <ul> In process Transactions </ul>
            <hr/>
            <ul> Intiated Transactions </ul>
            <hr/>
            <ul> Rejected Transactions </ul>
            <hr/>
        </div>
    </div>
  )
}

export default Tasklist

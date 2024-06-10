import React from 'react'
import "./Tasklist.css"

function Tasklist() {
  return (
    <div>
      <div className='task'>Tasklist</div>
  
        <div className='list'>
          <hr/>
            <ul className='ul1'> Pending Transactions </ul>
            <hr/>
            <ul className='ul1'> In process Transactions </ul>
            <hr/>
            <ul className='ul1'> Intiated Transactions </ul>
            <hr/>
            <ul className='ul1'> Rejected Transactions </ul>
            <hr/>
        </div>
    </div>
  )
}

export default Tasklist

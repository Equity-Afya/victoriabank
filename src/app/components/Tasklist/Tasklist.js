import React from 'react'
import "./Tasklist.css"

function Tasklist() {
  return (
    <div>
        <div className='list'>
            <ul> Pending Transactions </ul>
            <ul> In process Transactions </ul>
            <ul> Intiated Transactions </ul>
            <ul> Rejected Transactions </ul>
        </div>
    </div>
  )
}

export default Tasklist

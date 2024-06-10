import React from 'react'
import './Transfers.css'

function Transfers() {
  return (
    <div>
      <div className='transfers'>Transfers</div>
  
        <div className='lists'>
          <hr/>
            <ul className='ul'> Add beneficiary  </ul>
            <hr/>
            <ul className='ul'> View Beneficiary</ul>
            <hr/>
            <ul className='ul'> Within Bank</ul>
            <hr/>
            <ul className='ul'> Own Accounts</ul>
            <hr/>
            <ul className='ul'> Rtgs/EFT/Pesalink</ul>
            <hr/>
            <ul className='ul'> SWIFT-International</ul>
             <hr/>
            <ul className='ul'> Transfer History</ul>
            <hr/>
        </div>
    </div>
  )
}

export default Transfers

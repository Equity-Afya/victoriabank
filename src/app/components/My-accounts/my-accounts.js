import React from 'react'
import "./my-accounts.css"
import Accounts from '../Accounts/Accounts'

function Myaccounts() {
  return (
    <div className="container">
      <div className="item my-account-text">My Accounts</div>
			<div>Select Account</div>
			<div className="item select-account">
				<select className="select-account-text">
					<option value="KES">Business Account</option>
					<option value="USD">Joint Account</option>
					<option value="EUR">Savings Account</option>
					<option value="GBP">Health Savings Account</option>
				</select>
				{/* <img src="/assets/images/Icon-down.svg" alt="" /> */}
			</div>
         <Accounts/>
    </div>
  )
}

export default Myaccounts

import React from 'react'
import "./ATMCard.css";
const ATMCard = () => {
	return (
		<div className='container'>
			<div className="item atm-card">
				<div className="atm-card-upper">
					<img
						className="atm-card-logo"
						src="/assets/images/thelogo.svg"
						alt=""
					/>
					<img src="/assets/images/chip.svg" alt="" />
				</div>
				<div className="atm-card-lower">
					<div className="card-details">
						<span className="account-name">Eliud Njogu</span>
						<span className="account-number">0010 0048 3290</span>
					</div>
					<div className="currency">USD</div>
				</div>
			</div>
			<div className="item item-actual-balance">
				<span className="actual-balance-text">
					<span>Actual balance</span>
				</span>
				<div className="actual-balance">
					<span className="actual-balance-figure">$43,000.00</span>
					<img src="/assets/images/macho.svg" alt="" className="macho" />
				</div>
			</div>
			<div className="item current-accounts-text">Current Accounts</div>
			<div className="item item-pending-tasks">
				<div className="pending-tasks">
					<img
						src="/assets/images/arrow-right.svg"
						alt=""
						className="arrow-right"
					/>
					<span className="pending-task-text">Pending Tasks</span>
				</div>
				<div className="total">
					<span className="total-text">TOTAL</span>
					<span className="total-figure">65</span>
				</div>
			</div>
			<div className="item item-pending-transaction">
				<div className="pending-transaction">
					<img
						src="/assets/images/arrow-right-gold.svg"
						alt=""
						className="arrow-right-gold"
					/>
					<span className="pending-transaction-text">Pending Transactions</span>
				</div>
				<div className="total">
					<span className="total-text">TOTAL</span>
					<span className="total-figure-transaction">87</span>
				</div>
			</div>
		</div>
	);
};

export default ATMCard
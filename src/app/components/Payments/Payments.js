import React from 'react';
import "./Payments.css";

function Payments({ onAddBillerClick, onViewBillerClick, onPayBillerClick, onItaxClick, onMpesaClick, onAirtimeTopupClick, onPaymentHistoryClick }) {
  return (
    <div>
      <div className='payments'>Payments</div>
      <div className='pay'>
        <hr />
        <ul className='ul2' onClick={onAddBillerClick}>Add Biller</ul>
        <hr />
        <ul className='ul2' onClick={onViewBillerClick}>View Biller</ul>
        <hr />
        <ul className='ul2' onClick={onPayBillerClick}>View & Pay Biller</ul>
        <hr />
        <ul className='ul2' onClick={onItaxClick}>Itax</ul>
        <hr />
        <ul className='ul2' onClick={onMpesaClick}>Mpesa</ul>
        <hr />
        <ul className='ul2' onClick={onAirtimeTopupClick}>AirTime Top up</ul>
        <hr />
        <ul className='ul2' onClick={onPaymentHistoryClick}>Payment History</ul>
        <hr />
        <ul className='ul2' onClick={onPayBillerClick}>Pay Biller</ul>
        <hr />
      </div>
    </div>
  );
}

export default Payments;

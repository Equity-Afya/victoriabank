// Tasklist.js
import React from 'react';
import "./Tasklist.css";

function Tasklist({ onPendingClick, onInProcessClick, onInitiatedClick, onRejectedClick }) {
  return (
    <div>
      <div className='task'>Tasklist</div>
      <div className='list'>
        <hr />
        <ul className='ul1' onClick={onPendingClick}>Pending Transactions</ul>
        <hr />
        <ul className='ul1' onClick={onInProcessClick}>In process Transactions</ul>
        <hr />
        <ul className='ul1' onClick={onInitiatedClick}>Initiated Transactions</ul>
        <hr />
        <ul className='ul1' onClick={onRejectedClick}>Rejected Transactions</ul>
        <hr />
      </div>
    </div>
  );
}

export default Tasklist;

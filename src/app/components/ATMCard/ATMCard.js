"use client";
import React, { useState, useContext } from "react";
import "./ATMCard.css";
import { UserContext } from "@/app/context/UserContext";

const ATMCard = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false); // State to toggle balance visibility
  const [isLoading, setIsLoading] = useState(false); // State to simulate loading
  const { selectedAccount } = useContext(UserContext);

  const defaultAccount = {
    accountName: "Account Name",
    accountNumber: "0000000000",
    currency: "KES",
    balance: "0.00",
  };

  const account = selectedAccount || defaultAccount;
  const toggleBalance = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsBalanceVisible(!isBalanceVisible);
      setIsLoading(false);
    }, 1000); // Simulate a loading delay of 1 second
  };

  return (
    <div className="atm-container">
      <div className="item atm-card">
        <div className="atm-card-upper">
          <img
            className="atm-card-logo"
            src="/assets/images/thelogo.svg"
            alt="Logo"
          />
          <img src="/assets/images/chip.svg" alt="Chip" />
        </div>
        <div className="atm-card-lower">
          <div className="card-details">
            <span className="account-name">{selectedAccount?.accountName}</span>
            <span className="account-number">{selectedAccount?.accountNumber}</span>
          </div>
          <div className="currency">{selectedAccount?.currency}</div>
        </div>
      </div>
      <div className="item item-actual-balance" onClick={toggleBalance}>
        <span className="actual-balance-text">
          <span>Actual balance</span>
        </span>
        <div className="actual-balance">
          <span className="actual-balance-figure">
            {isLoading
              ? "Loading..."
              : isBalanceVisible
                ? `${selectedAccount.balance}`
                : "**********"}
          </span>
          {isLoading ? (
            <div className="loader"></div> // Optional loading spinner
          ) : (
            <>
              {isBalanceVisible ? (
                <img
                  src="/assets/images/slashedmacho.svg"
                  alt="Hide Balance"
                  className="macho"
                />
              ) : (
                <img
                  src="/assets/images/macho.svg"
                  alt="Show Balance"
                  className="macho"
                />
              )}
            </>
          )}
        </div>
      </div>
      <div className="current-accounts-text">Current Accounts</div>
      <div className="item-pending-tasks">
        <div className="pending-tasks">
          <img
            src="/assets/images/arrow-right.svg"
            alt="Arrow Right"
            className="arrow-right"
          />
          <span className="pending-task-text">Pending Tasks</span>
        </div>
        <div className="total">
          <span className="total-text">TOTAL</span>
          <span className="total-figure">65</span>
        </div>
      </div>
      <div className="item-pending-transaction">
        <div className="pending-transaction">
          <img
            src="/assets/images/arrow-right-gold.svg"
            alt="Arrow Right Gold"
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

export default ATMCard;

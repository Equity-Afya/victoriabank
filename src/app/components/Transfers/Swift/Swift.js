"use client";
import React, { useState } from "react";
import axios from "axios";
import styles from "./Swift.module.css";

const Swift = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [chequeNumber, setChequeNumber] = useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (!fromAccount || !amount || !beneficiary) {
      alert("Please fill in all required fields.");
      return;
    }

    const transferDetails = {
      fromAccount,
      amount,
      beneficiary,
      chequeNumber,
    };

    try {
      const response = await axios.post(
        "https://api.example.com/transfer",
        transferDetails
      );

      if (response.status === 200) {
        alert("Transfer Successful");
        setFromAccount("");
        setAmount("");
        setBeneficiary("");
        setChequeNumber("");
      } else {
        alert(`Transfer Failed: ${response.data.message}`);
      }
    } catch (error) {
      alert(
        `Transfer Failed: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };

  return (
    <div>
      <div className={styles.form}>
        <h2 className={styles.bankdetails}>SWIFT</h2>
        <form className={styles.inputFields} onSubmit={handleTransfer}>
          <div className={styles.leftinput1}>
            <select
              className={styles.currencySelect}
              value={fromAccount}
              onChange={(e) => setFromAccount(e.target.value)}
            >
              <option value="" disabled>
                From which Account
              </option>
              <option value="Business">Business Account</option>
              <option value="Savings">Savings Account</option>
            </select>
            <input
              type="number"
              placeholder="Amount"
              className={styles.inputField}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              className={styles.currencySelect}
              value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}
            >
              <option value="" disabled>
                Choose Beneficiary
              </option>
              <option value="eliud">Kobbie Mainoo</option>
              <option value="mark">Alejandro Garnacho</option>
            </select>
            <input
              type="text"
              placeholder="Insert Cheque Number (Not Mandatory)"
              className={styles.inputField}
              value={chequeNumber}
              onChange={(e) => setChequeNumber(e.target.value)}
            />
          </div>

          <div className={styles.button1}>
            <button type="submit" className={styles.button}>
              Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Swift;

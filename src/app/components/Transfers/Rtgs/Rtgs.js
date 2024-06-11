"use client";
import React, { useState } from "react";
import axios from "axios";
import styles from "./Rtgs.module.css";

const Rtgs = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [chequeNumber, setChequeNumber] = useState("");
  const [selectedOptionTransferType, setSelectedOptionTransferType] =
    useState("");
  const [selectedOptionSendTo, setSelectedOptionSendTo] = useState("");

  const handleTransferTypeOptionChange = (e) => {
    setSelectedOptionTransferType(e.target.value);
  };

  const handleSendToOptionChange = (e) => {
    setSelectedOptionSendTo(e.target.value);
  };

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
        <h2 className={styles.bankdetails}>RTGS/EFT/PesaLink</h2>
        <form className={styles.inputFields} onSubmit={handleTransfer}>
          <div className={styles.leftinput1}>
            <div className={styles.select}>
              <h4 className={styles.select_title}>Transfer Type :</h4>
              <form className={styles.select_options}>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="Pesa Link"
                    checked={selectedOptionTransferType === "Pesa Link"}
                    onChange={handleTransferTypeOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option1">Pesa Link</label>
                </div>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="RTGS"
                    checked={selectedOptionTransferType === "RTGS"}
                    onChange={handleTransferTypeOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option2">RTGS</label>
                </div>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="EFT"
                    checked={selectedOptionTransferType === "EFT"}
                    onChange={handleTransferTypeOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option3">EFT</label>
                </div>
              </form>
            </div>
            <div className={styles.select}>
              <h4 className={styles.select_title}>Send To :</h4>
              <form className={styles.select_options}>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="Mobile"
                    checked={selectedOptionSendTo === "Mobile"}
                    onChange={handleSendToOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option1">Mobile</label>
                </div>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="Account"
                    checked={selectedOptionSendTo === "Account"}
                    onChange={handleSendToOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option2">Account</label>
                </div>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="Card"
                    checked={selectedOptionSendTo === "Card"}
                    onChange={handleSendToOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option3">Card</label>
                </div>
              </form>
            </div>
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
              <option value="eliud">Eliud Njogu</option>
              <option value="mark">Mark Njogu</option>
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

export default Rtgs;

"use client";

import React, { useState } from "react";
import styles from "../within-bank/WithinBank.module.css";

const International = () => {
  const [selectedOptionBankCode, setSelectedOptionBankCode] = useState("");
  const [selectedOptionAcInfo, setSelectedOptionAcInfo] = useState("");

  const handleBankCodeOptionChange = (e) => {
    setSelectedOptionBankCode(e.target.value);
  };

  const handleAcInfoOptionChange = (e) => {
    setSelectedOptionAcInfo(e.target.value);
  };

  return (
    <div>
      <span className={styles.bankdetails}>Beneficiary Bank Details</span>
      <div className={styles.form}>
        <div className={styles.inputFields}>
          <div className={styles.leftinput1}>
            <input
              type="text"
              placeholder="Name"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Address"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="City"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Country"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Account Number"
              className={styles.inputField}
            />

            <input
              type="text"
              placeholder="Re-enter Account Number"
              className={styles.inputField}
            />
            <select className={styles.currencySelect}>
              <option value="" disabled selected>
                Choose currency
              </option>
              <option value="Ksh">Ksh</option>
              <option value="Dollar">Dollar</option>
            </select>

            <input
              type="text"
              placeholder="Bank"
              className={styles.inputField}
            />
            <div className={styles.select}>
              <h4 className={styles.select_title}>Bank Code :</h4>
              <form className={styles.select_options}>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="BIC Code"
                    checked={selectedOptionBankCode === "BIC Code"}
                    onChange={handleBankCodeOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option1">BIC Code</label>
                </div>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="Sort Code"
                    checked={selectedOptionBankCode === "Sort Code"}
                    onChange={handleBankCodeOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option2">Sort Code</label>
                </div>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="FED Wire"
                    checked={selectedOptionBankCode === "FED Wire"}
                    onChange={handleBankCodeOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option3">FED Wire</label>
                </div>
              </form>
            </div>
            <input
              type="text"
              placeholder="Branch"
              className={styles.inputField}
            />
            <div className={styles.select}>
              <h4 className={styles.select_title}>Account Info :</h4>
              <form className={styles.select_options}>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="Account Number"
                    checked={selectedOptionAcInfo === "Account Number"}
                    onChange={handleAcInfoOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option1">Account Number</label>
                </div>
                <div className={styles.select_option}>
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="IBAN"
                    checked={selectedOptionAcInfo === "IBAN"}
                    onChange={handleAcInfoOptionChange}
                    className={styles.radio_input}
                  />
                  <label htmlFor="option3">IBAN</label>
                </div>
              </form>
            </div>
          </div>

          <div className={styles.button1}>
            <button className={styles.button}>ADD BENEFICIARY +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default International;

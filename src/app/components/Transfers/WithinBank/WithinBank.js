import React from "react";
import styles from "./WithinBank.module.css";

const WithinBank = () => {
  return (
    <div>
      <span className={styles.bankdetails}>Transfer Within Bank</span>
      <div className={styles.form}>
        <div className={styles.inputFields}>
          <div className={styles.leftinput1}>
          <select className={styles.currencySelect}>
              <option value="" disabled selected>
                From which Account
              </option>
              <option value="Ksh">Bussiness Account</option>
              <option value="Dollar">Savings Account</option>
            </select>
            <input
              type="number"
              placeholder="Amount"
              className={styles.inputField}
            />
            <select className={styles.currencySelect}>
              <option value="" disabled selected>
                Choose Beneficiary
              </option>
              <option value="eliud">Eliud Njogu</option>
              <option value="mark">Mark Njogu</option>
            </select>
            <input
              type="text"
              placeholder="Insert Cheque Number(Not Mandatory)"
              className={styles.inputField}
            />
          </div>

          <div className={styles.button1}>
            <button className={styles.button}>Transfer +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithinBank;
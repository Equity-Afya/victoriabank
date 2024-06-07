import React from "react";
import styles from "../within-bank/WithinBank.module.css";

const Rtgs = () => {
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
              placeholder="Account Number"
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
              placeholder="Re-enter Account Number"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Bank"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Branch"
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
          </div>

          <div className={styles.button1}>
            <button className={styles.button}>ADD BENEFICIARY +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rtgs;
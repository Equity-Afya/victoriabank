import React from "react";
import styles from "./AddBiller.module.css";

const AddBiller = () => {
  return (
    <div>
      <span className={styles.bankdetails}>Add Biller</span>
      <div className={styles.form}>
        <div className={styles.inputFields}>
          <div className={styles.leftinput1}>
          <select className={styles.currencySelect}>
              <option value="" disabled selected>
                Please Select Biller
              </option>
              <option value="Ksh">KRA</option>
              <option value="Dollar">Kenya Power</option>
            </select>
            <input
              type="number"
              placeholder="Amount"
              className={styles.inputField}
            />
            <select className={styles.currencySelect}>
              <option value="" disabled selected>
                Please Select Stream
              </option>
              <option value="eliud">Stream 1</option>
              <option value="mark">Stream 2</option>
            </select>
            <input
              type="text"
              placeholder=" Biller Name"
              className={styles.inputField}
            />
          </div>

          <div className={styles.button1}>
            <button className={styles.button}>Transfer </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBiller;
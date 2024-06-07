import React from "react";
import styles from "../within-bank/WithinBank.module.css";

const Mpesa = () => {
  return (
    <div>
      <span className={styles.bankdetails}>Beneficiary M~Pesa Details</span>
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
              placeholder="Mobile Number"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Re-enter Mobile Number"
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

export default Mpesa;
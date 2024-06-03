
import React from 'react';
import styles from "./services.module.css"; 

function Services() {
  return (
    <div>
      <div className={styles.services}> 
        <div className={styles.box}>
          <img src="/assets/images/bill_payment.svg" alt="Bill Payment" className={styles.icon} /> 
          <span>Bill Payment</span> 
        </div>
       
        <div className={styles.box}>
          <img src="/assets/images/buyairtime.svg" alt="Buy Airtime" className={styles.icon} />
          <span>Buy Airtime</span>
        </div>
        <div className={styles.box}>
          <img src="/assets/images/mpesa.svg" alt="MPESA" className={styles.icon} />
          <span>MPESA</span>
        </div>
        <div className={styles.box}>
          <img src="/assets/images/pesalink.svg" alt="PESALINK" className={styles.icon} />
          <span>PESALINK</span>
        </div>
        <div className={styles.box}>
          <img src="/assets/images/beneficiary.svg" alt="Add Beneficiary" className={styles.icon} />
          <span>Add Beneficiary</span>
        </div>
        <div className={styles.box}>
          <img src="/assets/images/addaccount.svg" alt="Add Account" className={styles.icon} />
          <span>Add Account</span>
        </div>
      </div>
    </div>
  );
}

export default Services;

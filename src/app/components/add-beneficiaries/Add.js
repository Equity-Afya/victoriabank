
import React from 'react';

import styles from './add-beneficiaries.module.css';

function Add() {
 

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title1}>Add Beneficiary</span>
        <div className={styles.arrowIcon}>
          <span className={styles.title2}>MANAGE BENEFICIARIES</span>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.p}>

          <p>
          Within Bank
          </p>
           <p>
            Other Banks RTGS
          </p>
           <p>
            Other Banks - EFT
          </p>
           <p>
            International
          </p>
           <p>
            Pesalink
          </p>
           <p>
            mPesa
          </p>
        </div>
        <span className={styles.bankdetails}>
          Beneficiary Bank Details
        </span>
      <div className={styles.form}>
        <div className={styles.inputFields}>
          <div className={styles.leftinput1}>
         <input type='text' placeholder='Name' className={styles.inputField} />
          <input type='text' placeholder='Account Number' className={styles.inputField} />
          </div>
         <div className={styles.leftinput2}>
          <select className={styles.currencySelect}>
            <option value="" disabled selected>Choose currency</option>
            <option value="Ksh">Ksh</option>
            <option value="Dollar">Dollar</option>
          </select>
          <input type='text' placeholder='Re-enter Account Number' className={styles.inputField} />
         </div>
         <div className={styles.button}>
         <button >ADD BENEFICIARY +</button>
         </div>
         
          
        </div>
       
      </div>
      </div>
     
    </div>
  );
}



export default Add;

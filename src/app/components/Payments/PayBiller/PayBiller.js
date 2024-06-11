import React from "react";
import styles from './PayBiller.module.css'

const PayBiller = () => {
  return (
    <div className={styles.form1}>
      <h2 className={styles.bankdetails}>Pay Billers</h2>
      <div className={styles.tableContainer}>
        <table className={styles.billerTable}>
          <thead>
            <tr>
              <th>Biller Name</th>
              <th>Stream</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* List of billers will be populated here */}
            <tr>
              <td>KRA</td>
              <td>Stream 1</td>
              <td>
                <button className={styles.actionButton}>pay</button>
              </td>
            </tr>
            <tr>
              <td>Kenya Power</td>
              <td>Stream 2</td>
              <td>
                <button className={styles.actionButton}>Pay</button>
                
              </td>
            </tr>
             <tr>
              <td>Zuku</td>
              <td>Stream 3</td>
              <td>
                <button className={styles.actionButton}>Pay</button>
              </td>
            </tr>
             <tr>
              <td>Dstv</td>
              <td>Stream 4</td>
              <td>
                <button className={styles.actionButton}>Pay</button>
                
              </td>
            </tr>
             <tr>
              <td>Nairobi Water</td>
              <td>Stream 2</td>
              <td>
                <button className={styles.actionButton}>Pay</button>
               
              </td>
            </tr>
            {/* Add more table rows for other billers */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayBiller;

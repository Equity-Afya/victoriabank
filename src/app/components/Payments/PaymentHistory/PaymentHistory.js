import React from "react";
import styles from "./PaymentHistory.module.css";

const PaymentHistory = () => {
  return (
    <div className={styles.form1}>
      <h2 className={styles.bankdetails}>View Billers</h2>
      <div className={styles.tableContainer}>
        <table className={styles.billerTable}>
          <thead>
            <tr>
              <th>Biller Name</th>
               <td>Amount</td>
              <th>Date</th>
               <th>Stream</th>
            </tr>
          </thead>
          <tbody>
            {/* List of billers will be populated here */}
            <tr>
              <td>KRA</td>
              <td>Ksh.10,000</td>
               <td>2024.4.20</td>
              <td>Stream 1</td>
            </tr>
            <tr>
              <td>Kenya Power</td>
              <td>Ksh.20,000</td>
               <td>2024.5.20</td>
              <td>Stream 2</td>
            </tr>
             <tr>
              <td>Zuku</td>
              <td>Ksh.15,000</td>
               <td>2024.5.22</td>
              <td>Stream 3</td>
            </tr>
             <tr>
              <td>Dstv</td>
              <td>Ksh.18,000</td>
               <td>2024.4.24</td>
              <td>Stream 4</td>
            </tr>
             <tr>
              <td>Nairobi Water</td>
              <td>Ksh.30,000</td>
               <td>2024.4.28</td>
              <td>Stream 7</td>
            </tr>
            {/* Add more table rows for other billers */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

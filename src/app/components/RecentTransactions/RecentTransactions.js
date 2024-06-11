import React from "react";
import styles from "./RecentTransactions.module.css";

const RecentTransactions = () => {
  return (
    <div className={styles.recent_transactions}>
      <div className={styles.recents}>
        <h3>Recent Transactions </h3>
        <h4>0010 0048 3290</h4>
      </div>
      <div className={styles.latest}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>
                <h4>Date</h4>
              </th>
              <th className={styles.th}>
                <h4>Description</h4>
              </th>
              <th className={styles.th}>
                <h4>Type</h4>
              </th>
              <th className={styles.th}>
                <h4>Amount</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>20-05-2024</td>
              <td className={styles.td}>Account to Account QREQY18764804Y3U</td>
              <td className={styles.td}>Credit</td>
              <td className={styles.td}>70,500.00</td>
            </tr>
            <tr>
              <td className={styles.td}>23-05-2024</td>
              <td className={styles.td}>MPESA to Account 34EQYT8764804Y9E</td>
              <td className={styles.td}>Credit</td>
              <td className={styles.td}>10,000.00</td>
            </tr>
            <tr>
              <td className={styles.td}>29-05-2024</td>
              <td className={styles.td}>Account to MPESA FREQY18764804YHT</td>
              <td className={styles.td}>Debit</td>
              <td className={styles.td}>14,300.00</td>
            </tr>
            <tr>
              <td className={styles.td}>01-06-2024</td>
              <td className={styles.td}>Account to Account OLRQY18764804Y3U</td>
              <td className={styles.td}>Credit</td>
              <td className={styles.td}>4,300.00</td>
            </tr>
            <tr>
              <td className={styles.td}>05-06-2024</td>
              <td className={styles.td}>MPESA to Account OFDQY18764804Y3U</td>
              <td className={styles.td}>Debit</td>
              <td className={styles.td}>15,000.00</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.view_all}>
          <span className={styles.view_all_text}>VIEW ALL</span>
          <img
            className={styles.va_arrow_right_gold}
            src="/assets/images/arrow-right-gold.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;

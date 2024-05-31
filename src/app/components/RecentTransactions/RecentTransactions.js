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
          <tr className={styles.tr}>
            <th className={styles.th}>
              <h4>Date</h4>
            </th>
            <th className={styles.th}>
              <h4>Description</h4>
            </th>
            <th className={styles.th}>
              <h4>Status</h4>
            </th>
            <th className={styles.th}>
              <h4>Amount</h4>
            </th>
          </tr>
          <tr>
            <td className={styles.td}>10052024</td>
            <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
            <td className={styles.td}>Completed</td>
            <td className={styles.td}>10,000.00</td>
          </tr>
          <tr>
            <td className={styles.td}>10052024</td>
            <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
            <td className={styles.td}>Completed</td>
            <td className={styles.td}>10,000.00</td>
          </tr>
          <tr>
            <td className={styles.td}>10052024</td>
            <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
            <td className={styles.td}>Completed</td>
            <td className={styles.td}>10,000.00</td>
          </tr>
          <tr>
            <td className={styles.td}>10052024</td>
            <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
            <td className={styles.td}>Completed</td>
            <td className={styles.td}>10,000.00</td>
          </tr>
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

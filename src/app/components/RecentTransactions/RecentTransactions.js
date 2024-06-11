import React, { useContext, useEffect } from "react";
import styles from "./RecentTransactions.module.css";
import { UserContext } from "@/app/context/UserContext";

const RecentTransactions = () => {
  const { setTransactions, selectedAccount, transactions } = useContext(UserContext);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get(
          `http://192.168.223.198:9010/api/v1/account/getLastFiveTransactionsByAccountNumber?accountNumber=${selectedAccount?.accountNumber}`
        );
        console.log(response.data);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, [selectedAccount, setTransactions]);

  return (
    <div className={styles.recent_transactions}>
      <div className={styles.recents}>
        <h3>Recent Transactions </h3>
        <h4>{selectedAccount?.accountNumber}</h4>
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
                <h4>Transaction Type</h4>
              </th>
              <th className={styles.th}>
                <h4>Amount</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {
              transactions.map
            } */}
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
            </tr><tr>
              <td className={styles.td}>10052024</td>
              <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
              <td className={styles.td}>Completed</td>
              <td className={styles.td}>10,000.00</td>
            </tr><tr>
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

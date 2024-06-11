"use client";
import React, { useContext, useEffect } from "react";
import styles from "./RecentTransactions.module.css";
import { UserContext } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

const RecentTransactions = () => {
  const { setTransactions, selectedAccount, transactions } =
    useContext(UserContext);
  const router = useRouter();

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
                <h4>Type</h4>
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
              <td className={styles.td}>20-05-2024</td>
              <td className={styles.td}>Account to Account QREQY18764804Y3U</td>
              <td className={`${styles.td} ${styles.credit}`}>Credit</td>
              <td className={styles.td}>70,500.00</td>
            </tr>
            <tr>
              <td className={styles.td}>23-05-2024</td>
              <td className={styles.td}>MPESA to Account 34EQYT8764804Y9E</td>
              <td className={`${styles.td} ${styles.credit}`}>Credit</td>
              <td className={styles.td}>10,000.00</td>
            </tr>
            <tr>
              <td className={styles.td}>29-05-2024</td>
              <td className={styles.td}>Account to MPESA FREQY18764804YHT</td>
              <td className={`${styles.td} ${styles.debit}`}>Debit</td>
              <td className={styles.td}>14,300.00</td>
            </tr>
            <tr>
              <td className={styles.td}>01-06-2024</td>
              <td className={styles.td}>Account to Account OLRQY18764804Y3U</td>
              <td className={`${styles.td} ${styles.credit}`}>Credit</td>
              <td className={styles.td}>4,300.00</td>
            </tr>
            <tr>
              <td className={styles.td}>05-06-2024</td>
              <td className={styles.td}>MPESA to Account OFDQY18764804Y3U</td>
              <td className={`${styles.td} ${styles.debit}`}>Debit</td>
              <td className={styles.td}>15,000.00</td>
            </tr>
          </tbody>
        </table>
        <div
          className={styles.view_all}
          onClick={() => router.push("/viewstatement")}
        >
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

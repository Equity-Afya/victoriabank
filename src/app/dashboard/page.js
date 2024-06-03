import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import styles from "./dashboard.module.css";

const Dashhboard = () => {
  return (
    <div className={styles.dashboard}>
      <RecentTransactions />
    </div>
  );
};

export default Dashhboard;

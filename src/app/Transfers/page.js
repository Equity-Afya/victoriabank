"use client";
import React, { useState, useContext } from "react";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./transfers.module.css";
import Add from "../components/add-beneficiaries/Add";
import PendingTransactions from "../components/Tasklist/PendingTransactions/PendingTransactions";
import WithinBank from "../components/Transfers/WithinBank/WithinBank";
import { UserContext } from "../context/UserContext";

const TransfersPage = () => {
  const [showAddBeneficiary, setShowAddBeneficiary] = useState(false);
  const { renderTransferComponent } = useContext(UserContext);

  const toggleComponent = () => {
    setShowAddBeneficiary(!showAddBeneficiary);
  };
  return <div className={styles.dashboard}>{renderTransferComponent()}</div>;
};

export default TransfersPage;

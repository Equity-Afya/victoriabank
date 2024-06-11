'use client'
import React, { useState } from 'react';
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./tasklist.module.css"
import Add from '../components/add-beneficiaries/Add';
import PendingTransactions from '../components/Tasklist/PendingTransactions/PendingTransactions';
import InprocessTransactions from '../components/Tasklist/InprocessTransactions/InprocessTransactions'; // Import the component for In Process Transactions

const TasklistPage = () => {
    const [showAddBeneficiary, setShowAddBeneficiary] = useState(false);
    const [showInProcessTransactions, setShowInProcessTransactions] = useState(false); // State to manage showing In Process Transactions

    const toggleComponent = () => {
        setShowAddBeneficiary(!showAddBeneficiary);
    };

    const handleInProcessClick = () => {
        setShowInProcessTransactions(true); // Set state to show In Process Transactions
    };
    
    return (
        <div className={styles.dashboard}>
       <PendingTransactions/>
        </div>
    );
};

export default TasklistPage;

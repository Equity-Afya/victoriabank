"use client"
import React, { useState } from 'react';
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./tasklist.module.css"
import Add from '../components/add-beneficiaries/Add';
import PendingTransactions from '../components/Tasklist/PendingTransactions/PendingTransactions';

const TasklistPage = () => {
    const [showAddBeneficiary, setShowAddBeneficiary] = useState(false); 

    const toggleComponent = () => {
        setShowAddBeneficiary(!showAddBeneficiary); 
    };

    return (
        <div className={styles.dashboard}>
            <PendingTransactions/>
        </div>
    );
};

export default TasklistPage;

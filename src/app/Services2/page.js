"use client"
import React, { useState } from 'react';
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./services2.module.css"
import Add from '../components/add-beneficiaries/Add';
import PendingTransactions from '../components/Tasklist/PendingTransactions/PendingTransactions';
import CheckbookRequest from '../components/Services2/CheckbookRequest/CheckbookRequest';

const TasklistPage = () => {
    const [showAddBeneficiary, setShowAddBeneficiary] = useState(false); 

    const toggleComponent = () => {
        setShowAddBeneficiary(!showAddBeneficiary); 
    };

    return (
        <div className={styles.dashboard}>
            <CheckbookRequest/>
        </div>
    );
};

export default TasklistPage;

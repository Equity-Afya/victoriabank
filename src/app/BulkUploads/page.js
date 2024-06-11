"use client"
import React, { useState } from 'react';
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./bulkuploads.module.css"
import Add from '../components/add-beneficiaries/Add';
import PendingTransactions from '../components/Tasklist/PendingTransactions/PendingTransactions';
import WithinBank from '../components/Transfers/WithinBank/WithinBank';
import Bulkuploads from '../components/BulkUploads/Bulkuploads';
import EftMpesaRtgs from '../components/BulkUploads/EftMpesaRtgs/EftMpesaRtgs';

const TransfersPage = () => {
    const [showAddBeneficiary, setShowAddBeneficiary] = useState(false); 

    const toggleComponent = () => {
       setShowAddBeneficiary(!showAddBeneficiary); 
    };
    return (
        <div className={styles.dashboard}>
           
        </div>
    );
};

export default TransfersPage;

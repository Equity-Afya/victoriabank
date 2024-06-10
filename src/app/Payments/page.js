"use client"
import React, { useState } from 'react';
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./payment.module.css"
import Add from '../components/add-beneficiaries/Add';
import AddBiller from '../components/Payments/AddBiller/AddBiller';

const PaymentsPage = () => {
    const [showAddBeneficiary, setShowAddBeneficiary] = useState(false); 

    const toggleComponent = () => {
        setShowAddBeneficiary(!showAddBeneficiary); 
    };

    return (
        <div className={styles.dashboard}>
            <AddBiller/>
        </div>
    );
};

export default PaymentsPage;

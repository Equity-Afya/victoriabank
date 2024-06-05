"use client"
import React, { useState } from 'react';
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./dashboard.module.css";
import Add from '../components/add-beneficiaries/Add';

const DashboardPage = () => {
    const [showAddBeneficiary, setShowAddBeneficiary] = useState(false); 

    const toggleComponent = () => {
        setShowAddBeneficiary(!showAddBeneficiary); 
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.greetings}>
           <Greetings />
            </div>
            
            <Services onAddBeneficiaryClick={toggleComponent} /> 
            {showAddBeneficiary ? ( 
                <Add />
            ) : (
                <RecentTransactions /> 
            )}
        </div>
    );
};

export default DashboardPage;

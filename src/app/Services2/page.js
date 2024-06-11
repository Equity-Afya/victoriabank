"use client"
import React, { useState, useContext } from 'react';
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./services2.module.css";
import Add from '../components/add-beneficiaries/Add';
import { UserContext } from '../context/UserContext';
const TasklistPage = () => {
    const [showAddBeneficiary, setShowAddBeneficiary] = useState(false);
    const { renderServiceComponent } = useContext(UserContext);
    const toggleComponent = () => {
        setShowAddBeneficiary(!showAddBeneficiary);
    };

    return (
        <div className={styles.dashboard}>
            {renderServiceComponent()}
        </div>
    );
};

export default TasklistPage;


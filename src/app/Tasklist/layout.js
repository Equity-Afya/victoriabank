// TasklistLayout.js
"use client"
import React, { useState } from 'react';
import styles from "./tasklist.module.css";
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import Bottomcard from '../components/bottomcard/bottomcard';
import Tasklist from '../components/Tasklist/Tasklist';
import ATMCard from '../components/ATMCard/ATMCard';
import MyAccounts from '../components/MyAccounts/MyAccounts';
import Transfers from '../components/Transfers/Transfers';
import Payments from '../components/Payments/Payments';
import Bulkuploads from '../components/BulkUploads/Bulkuploads';
import Services2 from '../components/Services2/Services2';
import Trade from '../components/Trade/Trade';
import PendingTransactions from '../components/Tasklist/PendingTransactions/PendingTransactions';
import InprocessTransactions from '../components/Tasklist/InprocessTransactions/InprocessTransactions';
import IntiatedTransactions from '../components/Tasklist/IntiatedTransactions/IntiatedTransactions';
import RejectedTransactions from '../components/Tasklist/RejectedTransactions/RejectedTransactions';

export default function TasklistLayout({ children }) {
    const [view, setView] = useState('Pending'); // Initialize state with 'Pending'

    // Handlers to set the view state
    const handlePendingClick = () => setView('Pending');
    const handleInProcessClick = () => setView('InProcess');
    const handleInitiatedClick = () => setView('Initiated');
    const handleRejectedClick = () => setView('Rejected');

    // Determine which component to render based on the view state
    let TransactionComponent;
    switch (view) {
        case 'InProcess':
            TransactionComponent = InprocessTransactions;
            break;
        case 'Initiated':
            TransactionComponent =IntiatedTransactions ;
            break;
        case 'Rejected':
            TransactionComponent = RejectedTransactions;
            break;
        case 'Pending':
        default:
            TransactionComponent = PendingTransactions;
            break;
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>

            <div className={styles.main}>
                <Header />
                <div className={styles.main_body}>
                    <div className={styles.main_body_upper}>
                        <div className={styles.main_body_upper_left}>
                            <div className={styles.MyAccounts}><MyAccounts /></div>
                            <div className={styles.ATMCard}>
                                <Tasklist 
                                    onPendingClick={handlePendingClick}
                                    onInProcessClick={handleInProcessClick}
                                    onInitiatedClick={handleInitiatedClick}
                                    onRejectedClick={handleRejectedClick}
                                />
                            </div>
                        </div>
                        <div className={styles.main_body_upper_right}>
                            <TransactionComponent />
                        </div>
                    </div>
                    <div className={styles.buttomcard}>
                        <Bottomcard />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

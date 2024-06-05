"use client"
import React, { useState } from 'react';
import styles from './dashboard.module.css';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import Bottomcard from '../components/bottomcard/bottomcard';
import Tasklist from '../components/Tasklist/Tasklist';
import Accounts from '../components/Accounts/Accounts';

export default function DashboardLayout({ children }) {
    const [showAccounts, setShowAccounts] = useState(true);

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar setShowAccounts={setShowAccounts} />
            </div>

            <div className={styles.main}>
                <Header />
                <div className={styles.main_body}>
                    {showAccounts ? (
                        <div className={styles.main_body_upper}>
                            <Accounts />
                            <div className={styles.main_body_upper_right}>{children}</div>
                        </div>
                    ) : (
                        <div className={styles.main_body_upper}>
                            <Tasklist />
                            <div className={styles.main_body_upper_right}>{children}</div>
                        </div>
                    )}
                    <Bottomcard />
                </div>
                <Footer />
            </div>
        </div>
    );
}

// DashboardLayout.js
"use client"
import React, { useState } from 'react';
import styles from './dashboard.module.css';
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

export default function DashboardLayout({ children }) {
    const [showAccounts, setShowAccounts] = useState(true);
    const [showTasklist, setShowTasklist] = useState(false);
    const [showTransferslist, setShowTransferslist] = useState(false);
    const [showPayments, setShowPayments] = useState(false);
     const [showUploads, setShowUploads] = useState(false);
      const [showServices, setShowServices] = useState(false);
      const [showTrade,setShowTrade ] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar
                    setShowAccounts={setShowAccounts}
                    setShowTasklist={setShowTasklist}
                    setShowTransferslist={setShowTransferslist}
                    setShowPayments={setShowPayments}
                    setShowUploads={setShowUploads}
                    setShowServices={setShowServices}
                    setShowTrade={setShowTrade}
                />
            </div>

         	<div className={styles.main}>
				<Header />
				<div className={styles.main_body}>
					<div className={styles.main_body_upper}>
						<div classname={styles.main_body_upper_left}>
							<div className={styles.MyAccounts}><MyAccounts /></div>
							<div className={styles.ATMCard}>{showAccounts && <ATMCard />}</div>
                            <div className={styles.Tasklist}>{showTasklist && <Tasklist />}</div>
                            <div className={styles.Transfers}>{showTransferslist && <Transfers />}</div>
                            <div className={styles.Payments}>{showPayments && <Payments/>}</div>
                            <div className={styles.Uploads}>{showUploads && <Bulkuploads/>}</div>
                             <div className={styles.Services3}>{showServices && <Services2/>}</div>
                              <div className={styles.Trade}>{showTrade && <Trade/>}</div>
						</div>
						<div className={styles.main_body_upper_right}>
							{children}
						</div>
					</div>
					<Bottomcard />
				</div>
				<Footer />
			</div>

        </div>
    );
}

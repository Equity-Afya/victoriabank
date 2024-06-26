// DashboardLayout.js
"use client"
import React, { useState } from 'react';
import styles from "./services2.module.css"
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

export default function ServicesLayout({ children }) {

	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<Sidebar
				/>
			</div>

			<div className={styles.main}>
				<Header />
				<div className={styles.main_body}>
					<div className={styles.main_body_upper}>
						<div classname={styles.main_body_upper_left}>
							<div className={styles.MyAccounts}><MyAccounts /></div>
							<div className={styles.ATMCard}><Services2/></div>
						</div>
						<div className={styles.main_body_upper_right}>
							{children}
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

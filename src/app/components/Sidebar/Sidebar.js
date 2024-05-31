/* Sidebar.js */
'use client';
import { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.flex}>
      {!open? (
        <div className={styles.closedContent}>
          <img src="assets/images/humburger_menu.svg" className={styles.openBtn} onClick={toggleSidebar}/>
          {/* Display images when the sidebar is closed */}
          <div className={styles.icon} onClick={toggleSidebar}>
            <img src="assets/images/dashboard_icon.svg" alt="Dashboard Icon" />
            <img src="assets/images/task_list.svg" alt="Dashboard Icon" />
            <img src="assets/images/account.svg" alt="Dashboard Icon" />
            <img src="assets/images/transfer.svg" alt="Dashboard Icon" />
            <img src="assets/images/payments.svg" alt="Dashboard Icon" />
            <img src="assets/images/services.svg" alt="Dashboard Icon" />
            <img src="assets/images/trade.svg" alt="Dashboard Icon" />
            <img src="assets/images/logout.svg" alt="Dashboard Icon" />
          </div>
        </div>
      ) : (
        // Existing content for when the sidebar is open
        <div
          className={`${
            open? styles.sidebarOpen : styles.sidebarClosed
          } ${styles.sidebar} ${styles.duration}`}
        >
          <div className={`${styles.content}`}>
            <img src="assets/images/logo.svg" className={styles.logo} onClick={toggleSidebar}/>
            <img src="assets/images/backarrow.svg" className={styles.arrow} onClick={toggleSidebar}/>
            <div className={`${styles.pt}`}>
              <ul>
                <hr className={styles.divider} />
                <div className={styles.icons}>
                  <img src="assets/images/dashboard_icon.svg" alt="Dashboard Icon" />
                  <li className={`${styles.listItem}`}>Dashboard</li>
                </div>
                <hr className={styles.divider} />
                <div className={styles.icons}>
                  <img src="assets/images/task_list.svg" alt="Task List Icon" />
                  <li className={`${styles.listItem}`}>Task list</li>
                </div>
                <hr className={styles.divider} />
                <div className={styles.icons}>
                  <img src="assets/images/account.svg" alt="Account Icon" />
                  <li className={`${styles.listItem}`}>Account</li>
                </div>
                <hr className={styles.divider} />
                <div className={styles.icons}>
                  <img src="assets/images/transfer.svg" alt="Transfers Icon" />
                  <li className={`${styles.listItem}`}>Transfers</li>
                </div>
                <hr className={styles.divider} />
                <div className={styles.icons}>
                  <img src="assets/images/payments.svg" alt="Payments Icon" />
                  <li className={`${styles.listItem}`}>Payments</li>
                </div>
                <hr className={styles.divider} />
                <div className={styles.icons}>
                  <img src="assets/images/services.svg" alt="Services Icon" />
                  <li className={`${styles.listItem}`}>Services</li>
                </div>
                <hr className={styles.divider} />
                <div className={styles.icons}>
                  <img src="assets/images/trade.svg" alt="Trade Icon" />
                  <li className={`${styles.listItem}`}>Trade</li>
                </div>
                <hr className={styles.divider} />
                <div className={styles.icons}>
                  <img src="assets/images/logout.svg" alt="Logout Icon" />
                  <li className={`${styles.listItem}`}>Logout</li>
                </div>
                <hr className={styles.divider} />
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

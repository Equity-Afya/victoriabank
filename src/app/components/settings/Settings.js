// app/settings/page.jsx
"use client";

import React, { useState } from 'react';
import styles from './settings.module.css';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.sectionBar} ${isOpen ? styles.sectionBarOpen : ''}`}
      >
        <div className={styles.settingsIcon} onClick={toggleDropdown}>
          <span>⚙️</span> Settings
        </div>
        {isOpen && (
          <div className={styles.closeIcon} onClick={toggleDropdown}>
            -
          </div>
        )}
        {!isOpen && (
          <div className={styles.toggleIcon} onClick={toggleDropdown}>
            +
          </div>
        )}
        {isOpen && (
          <div className={styles.dropdown}>
            <div className={styles.dropdownItem}>
              <span className={styles.arrow}>&#8594;</span> Change Password
            </div>
            <div className={styles.dropdownItem}>
              <span className={styles.arrow}>&#8594;</span> Security Questions
            </div>
            <div className={styles.dropdownItem}>
              <span className={styles.arrow}>&#8594;</span> OTP Delivery Mode
            </div>
            <div className={styles.dropdownItem}>
              <span className={styles.arrow}>&#8594;</span> Favorite Transactions
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;


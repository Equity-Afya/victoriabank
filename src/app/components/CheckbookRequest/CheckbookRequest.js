import React, { useState } from 'react';
import styles from './CheckbookRequest.module.css'; // Import the CSS module

const CheckbookRequest = () => {
    const [name, setName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [quantity, setQuantity] = useState(25); // Default quantity set to 25

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, accountNumber, mobileNumber, quantity });

        // Show alert message
        alert('Request submitted successfully');

        // Clear input fields
        setName('');
        setAccountNumber('');
        setMobileNumber('');
        setQuantity(25); // Reset quantity to default
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.checkbook_text}>Request a Checkbook</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="accountNumber">Account Number:</label>
                    <input
                        type="text"
                        id="accountNumber"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        type='text'
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="quantity">Pages:</label>
                    <select
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        required
                    >
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                <button type="submit" className={styles.submitButton}>Submit Request</button>
            </form>
        </div>
    );
};

export default CheckbookRequest;

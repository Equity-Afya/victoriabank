"use client";
import React, { useState } from 'react';
import './BankersChequeRequest.css';

const BankersChequeRequest = () => {
    const [formData, setFormData] = useState({
        name: '',
        accountNumber: '',
        amount: '',
        payeeName: '',
        remarks: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/requestBankersCheque', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setResponseMessage(data.message);
        } catch (error) {
            console.error('Error submitting request:', error);
            setResponseMessage('Error submitting request.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="cheque-request-container">
            <h2>Banker's Cheque Request</h2>
            <form onSubmit={handleSubmit} className="cheque-request-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="accountNumber">Account Number:</label>
                    <input
                        type="text"
                        id="accountNumber"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="payeeName">Payee Name:</label>
                    <input
                        type="text"
                        id="payeeName"
                        name="payeeName"
                        value={formData.payeeName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    {isLoading ? 'Submitting...' : 'Submit Request'}
                </button>
            </form>
            {responseMessage && <div className="response-message">{responseMessage}</div>}
        </div>
    );
};

export default BankersChequeRequest;

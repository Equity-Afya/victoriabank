"use client";
import React, { useState } from 'react';
import './KRAReceipt.css';

const KRAReceipt = () => {
    const [formData, setFormData] = useState({
        taxpayerPin: '',
        taxYear: '',
        amount: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace with your actual API call
        try {
            // Example API call
            const response = await fetch('/api/submitKRAReceipt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setResponseMessage(data.message);
        } catch (error) {
            console.error('Error submitting KRA receipt:', error);
            setResponseMessage('Error submitting KRA receipt.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="kra-receipt-container">
            <h2>KRA Receipt Request</h2>
            <form onSubmit={handleSubmit} className="kra-receipt-form">
                <div className="form-group">
                    <label htmlFor="taxpayerPin">Taxpayer PIN:</label>
                    <input
                        type="text"
                        id="taxpayerPin"
                        name="taxpayerPin"
                        value={formData.taxpayerPin}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="taxYear">Tax Year:</label>
                    <input
                        type="text"
                        id="taxYear"
                        name="taxYear"
                        value={formData.taxYear}
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
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {responseMessage && <div className="response-message">{responseMessage}</div>}
        </div>
    );
};

export default KRAReceipt;

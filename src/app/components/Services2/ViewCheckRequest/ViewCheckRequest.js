"use client";
import React, { useState } from 'react';
import './ViewChequeRequest.css';

const ViewChequeRequest = () => {
    const [formData, setFormData] = useState({
        chequeNumber: '',
        accountNumber: '',
        date: '',
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
            const response = await fetch('/api/viewCheque', {
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
            setIsSubmitting(false);
        }
    };

    return (
        <div className="view-cheque-container">
            <h2>View Cheque Request</h2>
            <form onSubmit={handleSubmit} className="view-cheque-form">
                <div className="form-group">
                    <label htmlFor="chequeNumber">Cheque Number:</label>
                    <input
                        type="text"
                        id="chequeNumber"
                        name="chequeNumber"
                        value={formData.chequeNumber}
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
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
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

export default ViewChequeRequest;

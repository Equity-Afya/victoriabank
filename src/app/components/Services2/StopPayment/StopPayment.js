// components/StopPayment.js
import React, { useState } from 'react';
import './StopPayment.css';

const StopPayment = () => {
    const [formData, setFormData] = useState({
        accountNumber: '',
        checkNumber: '',
        reason: '',
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
            const response = await fetch('/api/stopPayment', {
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
        <div className="stop-payment-container">
            <h2>Stop Payment Request</h2>
            <form onSubmit={handleSubmit} className="stop-payment-form">
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
                    <label htmlFor="checkNumber">Check Number:</label>
                    <input
                        type="text"
                        id="checkNumber"
                        name="checkNumber"
                        value={formData.checkNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="reason">Reason:</label>
                    <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    ></textarea>
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

export default StopPayment;

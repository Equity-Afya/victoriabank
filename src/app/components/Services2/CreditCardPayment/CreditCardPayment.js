// components/CreditCardPayment.js
import React, { useState } from 'react';
import './CreditCardPayment.css';

const CreditCardPayment = () => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardholderName: '',
        expiryDate: '',
        cvv: '',
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
            const response = await fetch('/api/creditCardPayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setResponseMessage(data.message);
        } catch (error) {
            console.error('Error submitting payment:', error);
            setResponseMessage('Error submitting payment.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="credit-card-payment-container">
            <h2>Credit Card Payment</h2>
            <form onSubmit={handleSubmit} className="credit-card-payment-form">
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cardholderName">Cardholder Name:</label>
                    <input
                        type="text"
                        id="cardholderName"
                        name="cardholderName"
                        value={formData.cardholderName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">Credit Verification Value</label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                    {isSubmitting ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
            {responseMessage && <div className="response-message">{responseMessage}</div>}
        </div>
    );
};

export default CreditCardPayment;

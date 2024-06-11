"use client";
import React from 'react';
import './CustomerInstructions.css';

const CustomerInstructions = () => {
    return (
        <div className="customer-instructions-container">
            <h2>Customer Instructions</h2>
            <div className="instructions-content">
                <p>
                    Thank you for using our internet banking service. Below are some important instructions to follow:
                </p>
                <ol>
                    <li>Ensure your login credentials are kept confidential.</li>
                    <li>Check your account balance regularly for any unauthorized transactions.</li>
                    <li>Always log out of your account after completing your banking activities.</li>
                    <li>Be cautious of phishing emails or calls requesting sensitive information.</li>
                    <li>Contact customer support immediately if you notice any suspicious activity.</li>
                </ol>
                <p>
                    By following these instructions, you can help ensure the security of your online banking experience.
                </p>
            </div>
        </div>
    );
};

export default CustomerInstructions;

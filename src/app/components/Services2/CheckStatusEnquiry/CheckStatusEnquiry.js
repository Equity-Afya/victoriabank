"use client";
import React, { useState } from 'react';
import './CheckStatusEnquiry.css';

const CheckStatusEnquiry = () => {
    const [enquiryId, setEnquiryId] = useState('');
    const [status, setStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Replace with your actual API call
        try {
            const response = await fetch(`/api/checkStatus?enquiryId=${enquiryId}`);
            const data = await response.json();
            setStatus(data.status);
        } catch (error) {
            console.error("Error fetching status:", error);
            setStatus("Error fetching status.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="status-enquiry-container">
            <h2>Check Status Enquiry</h2>
            <form onSubmit={handleSubmit} className="status-enquiry-form">
                <div className="form-group">
                    <label htmlFor="enquiryId">Enquiry ID:</label>
                    <input
                        type="text"
                        id="enquiryId"
                        value={enquiryId}
                        onChange={(e) => setEnquiryId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Check Status</button>
            </form>
            {isLoading && <div className="loader">Loading...</div>}
            {status && <div className="status-result">Status: {status}</div>}
        </div>
    );
};

export default CheckStatusEnquiry;

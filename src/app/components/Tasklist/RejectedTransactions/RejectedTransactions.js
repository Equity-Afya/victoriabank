import React from 'react';
import './RejectedTransactions.css';

const RejectedTransactions  = () => {
    const transactions = [
        { date: '2024-02-08', amount: 'Ksh 10,000', status: 'Failed' },
        { date: '2024-03-20', amount: 'Ksh 20,000', status: 'Failed' },
        { date: '2024-05-06', amount: 'Ksh 17,000', status: 'Failed' },
        { date: '2024-05-26', amount: 'Ksh 110,000', status: 'Failed' },
        { date: '2024-06-07', amount: 'Ksh 190,000', status: 'Failed' }
    ];
    return (
        <div className="rejected">
            <h4 className="reject">Rejected Transactions </h4>
            <table>
               <thead>
                    <tr> <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                   </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RejectedTransactions ;

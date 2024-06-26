import React from 'react';
import './PendingTransactions.css';

const PendingTransactions = () => {
    const transactions = [
        { date: '2024-06-04', amount: 'Ksh 20,000', status: 'Pending' },
        { date: '2024-06-05', amount: 'Ksh 20,000', status: 'Pending' },
        { date: '2024-06-06', amount: 'Ksh 20,000', status: 'Pending' },
        { date: '2024-06-07', amount: 'Ksh 20,000', status: 'Pending' },
        { date: '2024-06-07', amount: 'Ksh 20,000', status: 'Pending' }
    ];
    return (
        <div className="pending">
            <h4 className="pend">Pending Transactions</h4>
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

export default PendingTransactions;

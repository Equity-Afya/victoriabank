import React from 'react';
import './InprocessTransactions.css';

const InprocessTransactions = () => {
    const transactions = [
        { date: '2024-06-08', amount: 'Ksh 34,000', status: 'In-Process' },
        { date: '2024-06-09', amount: 'Ksh 37,000', status: 'In-Process' },
        { date: '2024-06-10', amount: 'Ksh 54,000', status: 'In-Process' },
        { date: '2024-06-11', amount: 'Ksh 84,000', status: 'In-Process' },
        { date: '2024-06-11', amount: 'Ksh 96,000', status: 'In-Process' }
    ];
    return (
        <div className="in">
            <h4 className="process">In process Transactions</h4>
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

export default InprocessTransactions;

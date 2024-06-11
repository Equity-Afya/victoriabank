import React from 'react';
import './IntiatedTransactions.css';

const IntiatedTransactions = () => {
    const transactions = [
        { date: '2024-06-05', amount: 'ksh.40,000', status: 'Succes' },
        { date: '2024-06-05', amount: 'ksh.48,000', status: 'Succes' },
        { date: '2024-06-06', amount: 'ksh.53,000', status: 'Succes' },
        { date: '2024-06-07', amount: 'ksh.30,000', status: 'Succes' },
        { date: '2024-06-07', amount: 'ksh.49,000', status: 'Succes' }
    ];
    return (
        <div className="int">
            <h4 className="intiated">Initiated Transactions</h4>
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

export default IntiatedTransactions;

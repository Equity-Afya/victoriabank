'use client'
import React, { useState, useEffect } from 'react';
import './UploadsHistory.css'
function UploadsHistory() {
  const [uploadHistory, setUploadHistory] = useState([
    {
      id: 1, // Replace with appropriate identifier
      filename: 'salary_payments_2023-12-01.csv',
      uploadedBy: 'Raphael Baraka',
      uploadedAt: new Date('2023-12-01T10:00:00'),
      employeeData: [
        { name: 'Alice Smith', amount: 12000 },
        { name: 'Bob Johnson', amount: 15000 },
        { name: 'Charlie Brown', amount: 10000 },
      ],
    },
    {
      id: 2,
      filename: 'salary_payments_2024-01-01.csv',
      uploadedBy: 'Baraka Garama',
      uploadedAt: new Date('2024-01-01T15:30:00'),
      employeeData: [
        { name: 'David Lee', amount: 18000 },
        { name: 'Emily Williams', amount: 13000 },
        { name: 'Frank Garcia', amount: 16000 },
      ],
    },
  ]);

  // ... rest of the component (useEffect, render logic)

  return (
    <div className='upload'>
      <h3 className='history'>Upload History</h3>
      <table>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Uploaded By</th>
            <th>Uploaded At</th>
            <th>Employee Data</th>
          </tr>
        </thead>
        <tbody>
          {uploadHistory.map((upload) => (
            <tr key={upload.id}>
              <td>{upload.filename}</td>
              <td>{upload.uploadedBy}</td>
              <td>{upload.uploadedAt.toLocaleString()}</td>
              <td>{JSON.stringify(upload.employeeData)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UploadsHistory;

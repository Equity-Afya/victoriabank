"use client";

import React, { useState } from "react";
import styles from "./EftMpesaRtgs.module.css";

const EftMpesaRtgs = () => {
  const [selectedOptionBankCode, setSelectedOptionBankCode] = useState("");
  const [selectedOptionAcInfo, setSelectedOptionAcInfo] = useState("");

  const handleBankCodeOptionChange = (e) => {
    setSelectedOptionBankCode(e.target.value);
  };

  const handleAcInfoOptionChange = (e) => {
    setSelectedOptionAcInfo(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle the file upload logic here
    console.log("File uploaded:", file);
  };

  return (
    <div className={styles.uploads}>
      <h4 className={styles.EftMpesaRtgs}>EFT/MPESA/RTGS-Bulk Uploads</h4>
      <select className={styles.currencySelect}>
        <option value="" disabled selected>
          Please select Account
        </option>
        <option value="Ksh">0002334455</option>
        <option value="Dollar">9938477464646</option>
      </select>
      <div className={styles.select_option}>
        <h4>Types</h4>
        <input
          type="radio"
          id="option1"
          name="options"
          value="BIC Code"
          checked={selectedOptionBankCode === "BIC Code"}
          onChange={handleBankCodeOptionChange}
          className={styles.radio_input}
        />
        <label htmlFor="option1">EFT</label>
        <div className={styles.select_option}>
          <input
            type="radio"
            id="option2"
            name="options"
            value="Sort Code"
            checked={selectedOptionBankCode === "Sort Code"}
            onChange={handleBankCodeOptionChange}
            className={styles.radio_input}
          />
          <label htmlFor="option2">MPESA</label>
        </div>
        <div className={styles.select_option}>
          <input
            type="radio"
            id="option3"
            name="options"
            value="FED Wire"
            checked={selectedOptionBankCode === "FED Wire"}
            onChange={handleBankCodeOptionChange}
            className={styles.radio_input}
          />
          <label htmlFor="option3">RTGS</label>
        </div>
      </div>
      <div className={styles.select}>
        <div>
          <div className={styles.download1}>
         <h5>1. Download Reference File</h5>
          <a href="/path-to-reference-file.csv" download className={styles.download}>
            Download
          </a>
          </div>
          
        </div>
        <div>
          <h5>2. Upload Edited File</h5>
          <input type="file" onChange={handleFileUpload} className={styles.upload_input} />
        </div>
        <div>
          <input
            className={styles.paymentdetails}
            placeholder="Please Enter Payment Details"
          />
        </div>
      </div>
      <button className={styles.button}>Submit</button>
    </div>
  );
};

export default EftMpesaRtgs;

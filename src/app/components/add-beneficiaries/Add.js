"use client";

import React, { useState } from "react";
import styles from "./add-beneficiaries.module.css";
import International from "./international/International";
import Mpesa from "./mpesa/Mpesa";
import Pesalink from "./pesalink/Pesalink";
import Rtgs from "./rtgs/Rtgs";
import WithinBank from "./within-bank/WithinBank";
import BanksEft from "./banks-eft/BanksEft";

function Add() {
  const [selectedOption, setSelectedOption] = useState("Within Bank");

  const renderComponent = () => {
    switch (selectedOption) {
      case "Within Bank":
        return <WithinBank />;
      case "Other Bank RTGS":
        return <Rtgs />;
      case "Other Banks - EFT":
        return <BanksEft />;
      case "International":
        return <International />;
      case "Pesalink":
        return <Pesalink />;
      case "M~Pesa":
        return <Mpesa />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title1}>Add Beneficiary</span>
        <div className={styles.arrowIcon}>
          <span className={styles.title2}>MANAGE BENEFICIARIES</span>
        </div>
      </div>
      <div className={styles.box}>
        <span className={styles.select_beneficiary_text}>
          Select Beneficiary Type
        </span>
        <select
          className={styles.beneficiaries_select}
          name="beneficiaryType"
          id="beneficiaryType"
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="Within Bank">Within Bank</option>
          <option value="Other Bank RTGS">Other Bank RTGS</option>
          <option value="Other Banks - EFT">Other Banks - EFT</option>
          <option value="International">International</option>
          <option value="Pesalink">Pesalink</option>
          <option value="M~Pesa">M~Pesa</option>
        </select>
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
}

export default Add;

{
  /* <div className={styles.form}>
            <div className={styles.inputFields}>
              <div className={styles.leftinput1}>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.inputField}
                />
                <input
                  type="text"
                  placeholder="Account Number"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.leftinput2}>
                <select className={styles.currencySelect}>
                  <option value="" disabled selected>
                    Choose currency
                  </option>
                  <option value="Ksh">Ksh</option>
                  <option value="Dollar">Dollar</option>
                </select>
                <input
                  type="text"
                  placeholder="Re-enter Account Number"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.button1}>
                <button className={styles.button}>ADD BENEFICIARY +</button>
              </div>
            </div>
          </div> */
}
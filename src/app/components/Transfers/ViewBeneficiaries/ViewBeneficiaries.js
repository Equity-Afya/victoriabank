import React from "react";
import styles from "./ViewBeneficiaries.module.css";

const ViewBeneficiaries = () => {
  const beneficiaries = [
    { name: "Eliud Njogu", transactionType: "EFT" },
    { name: "Wanyonyi Wamalwa", transactionType: "RTGS" },
    { name: "Mark Njogu", transactionType: "Pesalink" },
    { name: "Alejandro Garnacho", transactionType: "SWIFT" },
    { name: "Kobbie Mainoo", transactionType: "SWIFT" },
  ];
  return (
    <div className={styles.pending}>
      <h4 className={styles.pend}>Beneficiaries</h4>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Type</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((beneficiary, index) => (
            <tr key={index} className={styles.trHover}>
              <td className={styles.td}>{beneficiary.name}</td>
              <td className={styles.td}>{beneficiary.transactionType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBeneficiaries;

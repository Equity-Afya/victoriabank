"use client";
import React, { useState } from "react";
import styles from "./payment.module.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Bottomcard from "../components/bottomcard/bottomcard";
import Tasklist from "../components/Tasklist/Tasklist"; // Replace with Payments component
import ATMCard from "../components/ATMCard/ATMCard";
import MyAccounts from "../components/MyAccounts/MyAccounts";
import Transfers from "../components/Transfers/Transfers";
// Import sub-components for Payments (optional)
import AddBiller from "../components/Payments/AddBiller/AddBiller";
import Payments from "../components/Payments/Payments";
import ViewBiller from "../components/Payments/ViewBiller/ViewBiller";
import ViewPayBiller from "../components/Payments/ViewPayBiller/ViewPayBiller";
// ... (other sub-components)

export default function PaymentsLayout({ children }) {
  const [view, setView] = useState("Add Biller"); // Initial view (replace with appropriate default)

  // Define handlers for each payment option (if using sub-components)
  const handleAddBillerClick = () => setView("Add Biller");
  const handleViewBillerClick = () => setView("View Biller");
  const handlePayBillerClick = () => setView("View Pay Biller");
  // ... (handlers for other payment options)

  // Determine which component to render based on the view state
  let PaymentComponent;
  switch (view) {
    case "Add Biller":
      PaymentComponent = AddBiller; // Replace with appropriate component
      break;
    case "View Biller":
      PaymentComponent = ViewBiller; // Replace with appropriate component
      break;
	  case "View Pay Biller":
      PaymentComponent = ViewPayBiller; // Replace with appropriate component
      break;
    // ... (cases for other payment options)
    default:
      PaymentComponent = Payments; // Default to Payments component
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.main}>
        <Header />
        <div className={styles.main_body}>
          <div className={styles.main_body_upper}>
            <div className={styles.main_body_upper_left}>
              <div className={styles.MyAccounts}>
                <MyAccounts />
              </div>
              <div className={styles.ATMCard}>
                <Payments // Replace with Payments component
                  onAddBillerClick={handleAddBillerClick} // Update prop names if needed
                  onViewBillerClick={handleViewBillerClick}
				   onPayBillerClick={handlePayBillerClick}

                  // ... (props for other payment options)
                />
              </div>
            </div>
            <div className={styles.main_body_upper_right}>
              <PaymentComponent />
            </div>
          </div>
          <div className={styles.buttomcard}>
            <Bottomcard />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

"use client";
import React, { useContext } from "react";
import "./Transfers.css";
import { UserContext } from "@/app/context/UserContext";

function Transfers() {
  const {
    clickedTransferOption,
    setClickedTransferOption,
    renderTransferComponent,
  } = useContext(UserContext);

  return (
    <div>
      <div className="transfers">Transfers</div>

      <div className="lists">
        <hr />
        <ul onClick={() => setClickedTransferOption("Add")}>Add Beneficiary</ul>
        <hr />
        <ul onClick={() => setClickedTransferOption("View")}>
          View Beneficiary
        </ul>
        <hr />
        <ul onClick={() => setClickedTransferOption("Within Bank")}>
          Within Bank
        </ul>
        <hr />
        <ul onClick={() => setClickedTransferOption("Own Accounts")}>
          Own Accounts
        </ul>
        <hr />
        <ul onClick={() => setClickedTransferOption("Rtgs/EFT/Pesalink")}>
          Rtgs/EFT/Pesalink
        </ul>
        <hr />
        <ul onClick={() => setClickedTransferOption("SWIFT-International")}>
          SWIFT-International
        </ul>
        <hr />
        <ul onClick={() => setClickedTransferOption("Transfer History")}>
          Transfer History
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Transfers;

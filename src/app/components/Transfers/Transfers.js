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
        <ul onClick={() => setClickedTransferOption("Add")} className="ul4">
          Add Beneficiary
        </ul>
        <hr />
        <ul onClick={() => setClickedTransferOption("View")} className="ul4">
          View Beneficiary
        </ul>
        <hr />
        <ul
          onClick={() => setClickedTransferOption("Within Bank")}
          className="ul4"
        >
          Within Bank
        </ul>
        <hr />
        <ul
          onClick={() => setClickedTransferOption("Own Accounts")}
          className="ul4"
        >
          Own Accounts
        </ul>
        <hr />
        <ul
          onClick={() => setClickedTransferOption("Rtgs/EFT/Pesalink")}
          className="ul4"
        >
          Rtgs/EFT/Pesalink
        </ul>
        <hr />
        <ul
          onClick={() => setClickedTransferOption("SWIFT-International")}
          className="ul4"
        >
          SWIFT-International
        </ul>
        <hr />
        <ul
          onClick={() => setClickedTransferOption("Transfer History")}
          className="ul4"
        >
          Transfer History
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Transfers;

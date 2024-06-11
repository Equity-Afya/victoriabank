"use client";

import { createContext, useState } from "react";
import CheckbookRequest from "../components/Services2/CheckbookRequest/CheckbookRequest";
import CheckStatusEnquiry from "../components/Services2/CheckStatusEnquiry/CheckStatusEnquiry";
import BankersChequeRequest from "../components/Services2/BankersChequeRequest/BankersChequeRequest";
import StopPayment from "../components/Services2/StopPayment/StopPayment";
import ViewChequeRequest from "../components/Services2/ViewCheckRequest/ViewCheckRequest";
import KRAReceipt from "../components/Services2/KRAReceipt/KRAReceipt";
import CustomerInstructions from "../components/Services2/CustomerInstructions/CustomerInstructions";
import CreditCardPayment from "../components/Services2/CreditCardPayment/CreditCardPayment";
import WithinBank from "../components/Transfers/WithinBank/WithinBank";
import Rtgs from "../components/Transfers/Rtgs/Rtgs";
import OwnAccount from "../components/Transfers/OwnAccount/OwnAccount";
import Swift from "../components/Transfers/Swift/Swift";
import ViewBeneficiaries from "../components/Transfers/ViewBeneficiaries/ViewBeneficiaries";
import Add from "../components/add-beneficiaries/Add";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userAccounts, setUserAccounts] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState({
    id: 1,
    accountName: "Josphat Eyanae",
    accountNumber: "0031004979573",
    accountCode: "100",
    accountType: "Personal",
    branchCode: "003",
    balance: 129500,
    currency: "KES",
    mandate: "self",
  });
  const [transactions, setTransactions] = useState(null);
  const [clickedServiceOption, setClickedServiceOption] =
    useState("CheckbookRequest");

  const renderServiceComponent = () => {
    switch (clickedServiceOption) {
      case "CheckbookRequest":
        return <CheckbookRequest />;
      case "CheckStatusEnquiry":
        return <CheckStatusEnquiry />;
      case "BankersChequeRequest":
        return <BankersChequeRequest />;
      case "StopPayment":
        return <StopPayment />;
      case "ViewChequeRequest":
        return <ViewChequeRequest />;
      case "KRAReceipt":
        return <KRAReceipt />;
      case "CustomerInstructions":
        return <CustomerInstructions />;
      case "CreditCardPayment":
        return <CreditCardPayment />;
      default:
        return null;
    }
  };
  const [clickedTransferOption, setClickedTransferOption] =
    useState("Within Bank");

  const renderTransferComponent = () => {
    switch (clickedTransferOption) {
      case "Add":
        return <Add />;
      case "View":
        return <ViewBeneficiaries />;
      case "Within Bank":
        return <WithinBank />;
      case "Own Accounts":
        return <OwnAccount />;
      case "Rtgs/EFT/Pesalink":
        return <Rtgs />;
      case "SWIFT-International":
        return <Swift />;
      case "Transfer History":
        return <RecentTransactions />;
      default:
        return null;
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        userAccounts,
        setUserAccounts,
        selectedAccount,
        setSelectedAccount,
        transactions,
        setTransactions,
        clickedServiceOption,
        setClickedServiceOption,
        renderServiceComponent,
        clickedTransferOption,
        setClickedTransferOption,
        renderTransferComponent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

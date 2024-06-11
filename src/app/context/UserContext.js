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

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userAccounts, setUserAccounts] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [clickedServiceOption, setClickedServiceOption] =
    useState("CheckbookRequest");

  const renderServiceComponent = () => {
    switch (clickedServiceOption) {
      case "CheckbookRequest":
        return < CheckbookRequest />;
      case "CheckStatusEnquiry":
        return < CheckStatusEnquiry />;
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
  }

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

"use client";

import { createContext, useState } from "react";
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
  const [selectedAccount, setSelectedAccount] = useState(null);
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
        clickedTransferOption,
        setClickedTransferOption,
        renderTransferComponent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

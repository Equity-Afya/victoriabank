import React, { useContext, useEffect } from "react";
import axios from "axios";
import "./MyAccounts.css";
import { UserContext } from "@/app/context/UserContext";
import accounts from "../../models/accountsjson/accounts.json";

const MyAccounts = () => {
  const {
    userData,
    userAccounts,
    setUserAccounts,
    setSelectedAccount,
    selectedAccount,
  } = useContext(UserContext);

  useEffect(() => {
    const fetchAccounts = async () => {
      // try {
      //   const response = await axios.get(
      //     `http://192.168.223.198:9010/api/v1/account/getAccountsByCustomer?cif=${userData.entity.cif}`
      //   );

      //   console.log(response.data);
      //   //setUserAccounts(response.data);
      //   setUserAccounts(accounts);
      // } catch (error) {
      //   console.error("Error fetching accounts:", error);
      // }
      setUserAccounts(accounts);
    };

    fetchAccounts();
  }, []);

  const onSelectAccount = (e) => {
    const selectedAccountIndex = e.target.value;
    const account = userAccounts?.entity[selectedAccountIndex];
    setSelectedAccount(account);
    console.log(account);
  };

  return (

    <div className="my-account">
      <div className="my-account-text">My Accounts</div>
      <div>Select Account</div>
      <div className="select-account">
        <select onChange={onSelectAccount} className="select-account-text">
          {userAccounts?.entity.map((account, index) => (
            <option key={account.id} value={index}>
              {account?.accountType} {account?.accountNumber}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MyAccounts;

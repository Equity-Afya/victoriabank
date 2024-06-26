import React, { useContext } from "react";
import Styles from "./greetings.module.css";
import { UserContext } from "@/app/context/UserContext";

function Greetings() {
  const { userData } = useContext(UserContext);
  return (
    <div className={Styles.greetings}>
      <div className={Styles.good}>
        Good Day Josphat Eyanae{userData?.entity?.firstName}{" "}
        {userData?.entity?.lastName}
      </div>
      <div className={Styles.login}>Last login:10-05-2024 10:40</div>
    </div>
  );
}

export default Greetings;

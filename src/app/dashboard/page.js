"use client";
import React, { useState } from "react";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./dashboard.module.css";
import Add from "../components/add-beneficiaries/Add";
import Paybill from "../components/paybill/paybill";
import BuyAirtime from "../components/airtime/airtime";
import Mpesa from "../components/Mpesa/mpesa";
import Pesalink from "../components/pesalink/pesalink";

const DashboardPage = () => {
	const [showAddBeneficiary, setShowAddBeneficiary] = useState(false);
	const [showPaybill, setShowPaybill] = useState(false);
	const [showBuyAirtime, setShowBuyAirtime] = useState(false);
	const [showMpesa, setShowMpesa] = useState(false);
	const [showPesalink, setShowPesalink] = useState(false);

	const toggleComponent = () => {
		setShowAddBeneficiary(!showAddBeneficiary);
	};

	const togglePaybill = () => {
		setShowPaybill(!showPaybill);
	};

	const toggleBuyAirtime = () => {
		setShowBuyAirtime(!showBuyAirtime);
	};

	const toggleMpesa = () => {
		setShowMpesa(!showMpesa);
	};

	const togglePesalink = () => {
		setShowPesalink(!showPesalink);
	};

	return (
		<div className={styles.dashboard}>
			<div className={styles.greetings}>
				<Greetings />
			</div>

			<Services
				onAddBeneficiaryClick={toggleComponent}
				onClickBillPayment={togglePaybill}
				onclickBuyAirtime={toggleBuyAirtime}
				onClickMpesa={toggleMpesa}
				onClickPesalink={togglePesalink}
			/>
			{showPaybill ? <Paybill /> : null}
			{showAddBeneficiary ? (
				<Add />
			) : !showPaybill && !showBuyAirtime && !showMpesa && !showPesalink ? (
				<RecentTransactions />
			) : null}
			{showBuyAirtime ? <BuyAirtime /> : null}
			{showMpesa ? <Mpesa /> : null}
			{showPesalink ? <Pesalink /> : null}
		</div>
	);
};

export default DashboardPage;

"use client";
import React, { useState } from "react";
import styles from "./viewstatement.module.css";

const ViewStatement = () => {
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [duration, setDuration] = useState("");

	const handleViewStatement = () => {
		// Logic to view statement goes here
	};

	return (
		<div className={styles.container}>
			<select
				value={duration}
				onChange={(e) => setDuration(e.target.value)}
				className={styles.select}>
				<option value="1">1 Month</option>
				<option value="3">3 Months</option>
				<option value="6">6 Months</option>
				<option value="12">12 Months</option>
			</select>
			<input
				type="date"
				value={startDate}
				onChange={(e) => setStartDate(e.target.value)}
				className={styles.input}
			/>
			<input
				type="date"
				value={endDate}
				onChange={(e) => setEndDate(e.target.value)}
				className={styles.input}
			/>
			<button onClick={handleViewStatement} className={styles.button}>
				View
			</button>
		</div>
	);
};

export default ViewStatement;

import React, { useState } from "react";
import styles from "./airtime.module.css";

const BuyAirtime = () => {
	const [form, setForm] = useState({
		payFrom: "",
		payTo: "",
		amount: "",
		paymentReason: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<div className={styles.box}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label className={styles.label}>
					Buy For
					<select name="payTo" onChange={handleChange} className={styles.input}>
						<option value="">Select recipient</option>
						<option value="Safaricom">Safaricom</option>
						<option value="Airtel">Airtel</option>
						<option value="Telecom">Telkom</option>
					</select>
				</label>
				<label className={styles.label}>
					Mobile Number
					<input
						type="text"
						placeholder="+254"
						name="amount"
						onChange={handleChange}
						className={styles.input}
					/>
				</label>
				<label className={styles.label}>
					Amount
					<input
						type="text"
						name="paymentReason"
						onChange={handleChange}
						className={styles.input}
					/>
				</label>
				<button type="submit" className={styles.button}>
					Buy Airtime
				</button>
			</form>
		</div>
	);
};

export default BuyAirtime;

import React, { useState } from "react";
import styles from "./pesalink.module.css";

const Mpesa = () => {
	const [form, setForm] = useState({
		mobileNumber: "",
		bankName: "",
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
					Mobile Number
					<input
						type="text"
						name="payTo"
						onChange={handleChange}
						className={styles.input}
					/>
				</label>
				<label className={styles.label}>
					Bank Name
					<select
						name="bankName"
						onChange={handleChange}
						className={styles.input}>
						<option value="">Select a bank</option>
						<option value="KCB">KCB</option>
						<option value="Equity">Equity</option>
						<option value="Cooperative">Cooperative</option>
					</select>
				</label>
				<label className={styles.label}>
					Payment Reason
					<input
						type="text"
						name="paymentReason"
						onChange={handleChange}
						className={styles.input}
					/>
				</label>
				<button type="submit" className={styles.button}>
					Send Now
				</button>
			</form>
		</div>
	);
};

export default Mpesa;

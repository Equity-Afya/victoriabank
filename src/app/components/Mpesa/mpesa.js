import React, { useState } from "react";
import styles from "./mpesa.module.css";

const Mpesa = () => {
	const [form, setForm] = useState({
		mobileNumber: "",
		Amount: "",
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
					Amount
					<input
						type="text"
						name="amount"
						onChange={handleChange}
						className={styles.input}
					/>
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

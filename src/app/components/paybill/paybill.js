import React, { useState } from "react";
import styles from "./paybill.module.css";

const Paybill = () => {
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
					Pay To
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
					Pay Now
				</button>
			</form>
		</div>
	);
};

export default Paybill;

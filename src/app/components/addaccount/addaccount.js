import React, { useState } from "react";
import styles from "./addaccount.module.css";

const AddAccount = () => {
	const [form, setForm] = useState({
		accountName: "",
		accountNumber: "",
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
					Account Name
					<input
						type="text"
						name="accountName"
						onChange={handleChange}
						className={styles.input}
					/>
				</label>
				<label className={styles.label}>
					Branch
					<select
						name="bankName"
						onChange={handleChange}
						className={styles.input}>
						<option value="">Select a branch</option>
						<option value="Upper Hill">Upper Hill</option>
						<option value="Westlands">Westlands</option>
						<option value="Ruaraka">Ruaraka</option>
					</select>
				</label>
				<label className={styles.label}>
					Account Number
					<input
						type="text"
						name="paymentReason"
						onChange={handleChange}
						className={styles.input}
					/>
				</label>
				<button type="submit" className={styles.button}>
					Add Account
				</button>
			</form>
		</div>
	);
};

export default AddAccount;

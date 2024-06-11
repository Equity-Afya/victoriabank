"use client";
import React from "react";
import styles from "./viewstatement.module.css";
import ViewStatement from "./page";

const Layout = () => {
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<h3>View Your Statement</h3>
			</header>
			<main className={styles.main}>
				<div className={styles.content}>
					<ViewStatement />
				</div>
			</main>
			<footer className={styles.footer}>
				<p>© 2024 Victoria Commmercial Bank</p>
			</footer>
		</div>
	);
};

export default Layout;

import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./dashboard.module.css";
// import Header from "../components/Header/Header";

export const metadata = {
	title: "VCB-Dashboard",
	description: "VCB Dashboard page",
};

export default function DashboardLayout({ children }) {
	return (
		<div class={styles.layout}>
			<Sidebar />
			<div className="children">
				{/* <Header /> */}
				{children}
				{/* <Footer /> */}
			</div>
		</div>
	);
}

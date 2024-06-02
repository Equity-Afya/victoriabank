import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./dashboard.module.css";

export const metadata = {
	title: "VCB-Dashboard",
	description: "VCB Dashboard page",
};

export default function DashboardLayout({ children }) {
	return (
		<div class={styles.layout}>
			<Sidebar />
			<div className="children">
				{/* <Navbar /> */}
				{children}
				{/* <Footer /> */}
			</div>
		</div>
	);
}

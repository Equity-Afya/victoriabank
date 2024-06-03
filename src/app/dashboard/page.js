import styles from "./dashboard.module.css";

export default function DashboardPage() {
	return (
		<div className={styles.main_dashboard}>
			<div className={styles.main_center}>
				{/* <Card /> // This is the Card component */}
				<div className={styles.main_right}>
					{/* <Quicklinks /> // This is the Quicklinks component or cards */}
				</div>
				<div className={styles.summary_of_accounts}>
					{/* <AccountSummary /> // This is the AccountSummary component */}
				</div>
				<div className="topimage"></div>
			</div>
		</div>
	);
}

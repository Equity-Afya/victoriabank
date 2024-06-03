import styles from "./dashboard.module.css";
import Accounts from "../components/Accounts/Accounts";
// import RecentTransactions from "../components/RecentTransactions/RecentTransactions";

export default function DashboardPage() {
	return (
		<div className={styles.main_dashboard}>
			<div className={styles.main_center}>
				<Accounts />
				<div className={styles.main_right}>
					{/* <Quicklinks /> // This is the Quicklinks component or cards */}
				</div>
				<div className={styles.summary_of_accounts}>
					{/* <RecentTransactions /> */}
				</div>
				<div className="topimage"></div>
			</div>
		</div>
	);
}

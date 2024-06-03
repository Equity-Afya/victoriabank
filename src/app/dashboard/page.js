import styles from "./dashboard.module.css";
import Accounts from "../components/Accounts/Accounts";
import Services from "../components/services/Services";
export default function DashboardPage() {
	return (
		<div className={styles.main_dashboard}>
			<div className={styles.main_center}>
				<Accounts />
				<div className={styles.main_right}>
					<Services />
				</div>
				<div className={styles.summary_of_accounts}>
					{/* <RecentTransactions /> */}
				</div>
				<div className="topimage"></div>
			</div>
		</div>
	);
}

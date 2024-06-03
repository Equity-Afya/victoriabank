import styles from "./dashboard.module.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Accounts from "../components/Accounts/Accounts";
import Bottomcard from "../components/bottomcard/bottomcard";
import Services from "../components/services/Services";

export default function DashboardLayout({ children }) {
	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.main}>
				<Header />
				<div className={styles.main_body}>
					<div className={styles.main_body_upper}>
						<Accounts />
						<div className={styles.main_body_upper_right}>
							{children}
						</div>
					</div>
					<Bottomcard />
				</div>
				<Footer />
			</div>

		</div>
	);
}

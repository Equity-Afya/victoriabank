import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Greetings from "../components/greetings/greetings";
import Services from "../components/services/Services";
import styles from "./dashboard.module.css";


const DashboardPage = () => {
	return (
		<div className={styles.dashboard}>
			<Greetings />
			<Services />
			<RecentTransactions />
		</div>
	);
}
export default DashboardPage
import styles from "./dashboard.module.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
// import Accounts from "../components/Accounts/Accounts";
import Bottomcard from "../components/bottomcard/bottomcard";
import MyAccounts from "../components/MyAccounts/MyAccounts";
import ATMCard from "../components/ATMCard/ATMCard";


export default function DashboardLayout({ children }) {
	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>

			<div className={styles.main}>
				<Header />
				<div className={styles.main_body}>
					<div className={styles.main_body_upper}>
						<div classname={styles.main_body_upper_left}>
							<div className={styles.MyAccounts}> <MyAccounts /> </div>
							<div className={styles.ATMCard}><ATMCard /></div>
						</div>
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

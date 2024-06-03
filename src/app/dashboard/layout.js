import styles from "./dashboard.module.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import Accounts from "../components/Accounts/Accounts";

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
              <RecentTransactions />
            </div>
          </div>
          <div className={styles.mbl}></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

{
  /* <Header />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.content_right}>
          <div className={styles.main}>
            <Accounts />
            <main className={styles.main_right}>{children}</main>
          </div>
          <RecentTransactions />
        </div>
      </div>
      <Footer /> */
}

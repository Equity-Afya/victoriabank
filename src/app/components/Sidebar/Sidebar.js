import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({ setShowAccounts, setShowTasklist, setShowTransferslist, setShowPayments, setShowUploads, setShowServices, setShowTrade }) => {
	const [collapseSidebar, setCollapseSidebar] = React.useState(false);
	const handleCollapseSidebar = () => {
		setCollapseSidebar((prev) => !prev);
	};
	const handleTaskListClick = () => {
		setShowAccounts(false); // Hide the ATMCard component
		setShowTasklist(true); // Show the Tasklist component
		setShowTransferslist(false);
		setShowPayments(false) // Hide the Transfers component
		setShowUploads(false)
		setShowServices(false)
		setShowTrade(false)
	};

	const handleTransfersClick = () => {
		setShowAccounts(false); // Hide the ATMCard component
		setShowTasklist(false); // Hide the Tasklist component
		setShowTransferslist(true);
		setShowPayments(false) // Show the Transfers component
		setShowUploads(false)
		setShowServices(false)
		setShowTrade(false)
	};
	const handlePaymentsClick = () => {
		setShowAccounts(false); // Hide the ATMCard component
		setShowTasklist(false); // Hide the Tasklist component
		setShowTransferslist(false);
		setShowPayments(true)// Show the Transfers component
		setShowUploads(false)
		setShowServices(false)
		setShowTrade(false)
	};
	const handleBulkuploadsClick = () => {
		setShowAccounts(false); // Hide the ATMCard component
		setShowTasklist(false); // Hide the Tasklist component
		setShowTransferslist(false);
		setShowPayments(false)// Show the Transfers component
		setShowUploads(true)
		setShowServices(false)
		setShowTrade(false)
	};
	const handleServicesClick = () => {
		setShowAccounts(false); // Hide the ATMCard component
		setShowTasklist(false); // Hide the Tasklist component
		setShowTransferslist(false);
		setShowPayments(false)// Show the Transfers component
		setShowUploads(false)
		setShowServices(true)
		setShowTrade(false)
	};
	const handleTradeClick = () => {
		setShowAccounts(false); // Hide the ATMCard component
		setShowTasklist(false); // Show the Tasklist component
		setShowTransferslist(false);
		setShowPayments(false) // Hide the Transfers component
		setShowUploads(false)
		setShowServices(false)
		setShowTrade(true)
	};
	return (
		<div className={styles.sidebar_wrapper}>
			<aside className={`${styles.sidebar} ${collapseSidebar ? styles.collapsed : ""}`}>
				<button className={styles.btn} onClick={handleCollapseSidebar}>
					{collapseSidebar ? (
						<MdKeyboardArrowRight />
					) : (
						<MdKeyboardArrowLeft />
					)}
				</button>
				{collapseSidebar && (
					<div className={styles.sidebar_top}>
						<Image
							src="/assets/images/vlogo.svg"
							className={styles.vlogo}
							width={20}
							height={20}
						/>
						{/* <Image src="/assets/images/vb_logo.png" width={70} height={40} /> */}
					</div>
				)}
				<ul className={styles.nav_links}>
					<li>
						<Image
							src="/assets/images/dashboard_icon.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<li onClick={handleTaskListClick}>
						<Image
							src="/assets/images/task_list.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Task List</Link>
					</li>
					<li onClick={handleTransfersClick}>
						<Image
							src="/assets/images/transfer.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Transfers</Link>
					</li>
					<li onClick={handlePaymentsClick}>
						<Image
							src="/assets/images/payments.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Payments</Link>
					</li>
					<li onClick={handleBulkuploadsClick}>
						<Image
							src="/assets/images/services.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Bulk Upload</Link>
					</li>
					<li onClick={handleServicesClick}>
						<Image
							src="/assets/images/services.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Services</Link>
					</li>

					<li onClick={handleTradeClick}>
						<Image
							src="/assets/images/trade.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Trade</Link>
					</li>
				</ul>
			</aside>
		</div>
	);
};

export default Sidebar;

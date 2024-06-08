import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation';



const Sidebar = () => {
	const router = useRouter();
	const [collapseSidebar, setCollapseSidebar] = React.useState(false);
	const handleCollapseSidebar = () => {
		setCollapseSidebar((prev) => !prev);
	};
	const handleDashboardClick  = () => {
		router.push('/dashboard')
	}
	const handleTaskListClick = () => {
		router.push('/Tasklist')
	};

	const handleTransfersClick = () => {
		router.push('/Transfers')
		
	};
	const handlePaymentsClick = () => {
		router.push('/Payments')
	};
	const handleBulkuploadsClick = () => {
		router.push('/BulkUploads')
	};
	const handleServicesClick = () => {
		router.push('/Services2')
	};
	const handleTradeClick = () => {
		router.push('/Trade')
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
					<li onClick={handleDashboardClick}>
						<Image
							src="/assets/images/dashboard_icon.svg"
							alt="logo"
							width={20}
							height={20}
							title="Dashboard"
						/>
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<li onClick={handleTaskListClick}>
						<Image
							src="/assets/images/task_list.svg"
							alt="logo"
							width={20}
							height={20}
							title="Tasklists"
						/>
						<Link href="/dashboard">Task List</Link>
					</li>
					<li onClick={handleTransfersClick}>
						<Image
							src="/assets/images/transfer.svg"
							alt="logo"
							width={20}
							height={20}
							title="Transfers"
						/>
						<Link href="/dashboard">Transfers</Link>
					</li>
					<li onClick={handlePaymentsClick}>
						<Image
							src="/assets/images/payments.svg"
							alt="logo"
							width={20}
							height={20}
							title="Payments"
						/>
						<Link href="/dashboard">Payments</Link>
					</li>
					<li onClick={handleBulkuploadsClick}>
						<Image
							src="/assets/images/services.svg"
							alt="logo"
							width={20}
							height={20}
							title="Bulk Uploads"
						/>
						<Link href="/dashboard">Bulk Upload</Link>
					</li>
					<li onClick={handleServicesClick} >
						<Image
							src="/assets/images/services.svg"
							alt="logo"
							width={20}
							height={20}
							title="Services"
						/>
						<Link href="/dashboard">Services</Link>
					</li>

					<li onClick={handleTradeClick} >
						<Image
							src="/assets/images/trade.svg"
							alt="logo"
							width={20}
							height={20}
							title="Trade"
						/>
						<Link href="/dashboard">Trade</Link>
					</li>
				</ul>
			</aside>
		</div>
	);
};
export default Sidebar;

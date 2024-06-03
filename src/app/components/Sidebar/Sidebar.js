"use client";
import React, { useState } from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
	const [collapseSidebar, setCollapseSidebar] = useState(false);

	const handleCollapseSidebar = () => {
		setCollapseSidebar((prev) => !prev);
	};
	return (
		<div className={styles.sidebar_wrapper}>
			<aside
				className={`${styles.sidebar} ${
					collapseSidebar ? styles.collapsed : ""
				}`}>
				<button className={styles.btn} onClick={handleCollapseSidebar}>
					{collapseSidebar ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
				</button>
				<div className={styles.sidebar_top}>
					<Image
						src="/assets/images/vlogo.svg"
						className={styles.vlogo}
						width={20}
						height={20}
					/>
					{/* <Image src="/assets/images/vb_logo.png" width={70} height={40} /> */}
				</div>
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
					<li>
						<Image
							src="/assets/images/task_list.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Task List</Link>
					</li>
					<li>
						<Image
							src="/assets/images/account.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Account Summary</Link>
					</li>
					<li>
						<Image
							src="/assets/images/transfer.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Transfers</Link>
					</li>
					<li>
						<Image
							src="/assets/images/payments.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Payments</Link>
					</li>
					<li>
						<Image
							src="/assets/images/mpesa.png"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/services">MPESA</Link>
					</li>
					<li>
						<Image
							src="/assets/images/services.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/services">Bulk Upload</Link>
					</li>
					<li>
						<Image
							src="/assets/images/services.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/services">Services</Link>
					</li>
					<li>
						<Image
							src="/assets/images/setting-icon.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/services">Settings</Link>
					</li>

					<li>
						<Image
							src="/assets/images/trade.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Trade</Link>
					</li>
					<li>
						<Image
							src="/assets/images/logout.svg"
							alt="logo"
							width={20}
							height={20}
						/>
						<Link href="/dashboard">Logout</Link>
					</li>
				</ul>
			</aside>
		</div>
	);
};

export default Sidebar;

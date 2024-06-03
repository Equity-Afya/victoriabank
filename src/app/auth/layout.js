import React from "react";

export const metadata = {
	title: "VCB-Login",
	description: "This is Login page",
};

export default function AuthLayout({ children }) {
	return (
		<div className="mainsoe">
			<section className="ma">{children}</section>
		</div>
	);
}

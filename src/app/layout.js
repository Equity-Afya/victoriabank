import "./globals.css";

export const metadata = {
	title: "VCB",
	description: "The Ultimate Banking Solution",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

import { Link } from "react-router";

const Page404 = () => {
	return (
		<div>
			<p style={{ textAlign: "center", fontSize: 180, color: "#9E0113" }}>
				404
			</p>
			<p style={{ textAlign: "center", fontSize: 30 }}>Page doesn't exist</p>
			<Link
				to='/'
				style={{
					textAlign: "center",
					fontSize: 20,
					margin: "40px 0 0 0",
					display: "block",
				}}>
				← Back to main page
			</Link>
		</div>
	);
};

export default Page404;

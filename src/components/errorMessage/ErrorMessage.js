import img from "./error.gif";

const ErrorMessage = () => {
	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<img
			style={{
				display: "block",
				width: 250,
				height: 250,
				objectFit: "contain",
				margin: "0 auto",
			}}
			src={img}
		/>
	);
};

export default ErrorMessage;

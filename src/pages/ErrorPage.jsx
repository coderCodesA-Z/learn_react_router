import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center flex-col">
			<h1 className="font-mono text-8xl">ErrorPage 🛑</h1>
			<Link to="/" className="underline mt-8">
				Go Back
			</Link>
		</div>
	);
};

export default ErrorPage;

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="flex justify-between items-center px-10 py-4">
				<h4 className="text-2xl font-bold">Logo</h4>
				<ul className="flex space-x-2 p-4 ">
					<li>
						<Link to={"/"} className="px-4 py-3 rounded-md text-white">
							Home
						</Link>
					</li>
					<li>
						<Link to={"/profile"} className="px-4 py-3 rounded-md text-white">
							Profile
						</Link>
					</li>
					<li>
						<Link to={"/admin"} className="px-4 py-3 rounded-md text-white">
							Admin
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

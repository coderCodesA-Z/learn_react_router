import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import RootLayout from "./pages/RootLayout";

// myapp.com
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{ path: "/profile", element: <Profile /> },
		],
	},
	{
		path: "/admin",
		element: <Admin />,
	},
]);

// const appRoutesDefinition = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<Home />} />
// 		<Route path="/profile" element={<Profile />} />
// 	</Route>
// );

// const appRouter = createBrowserRouter(appRoutesDefinition);

const App = () => {
	return (
		<>
			<RouterProvider router={appRouter}>App</RouterProvider>
		</>
	);
};

export default App;

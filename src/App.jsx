import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// myapp.com
// const appRouter = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />,
// 	},
// 	{ path: "/profile", element: <Profile /> },
// ]);

const appRoutesDefinition = createRoutesFromElements(
	<Route>
		<Route path="/" element={<Home />} />
		<Route path="/profile" element={<Profile />} />
	</Route>
);

const appRouter = createBrowserRouter(appRoutesDefinition);

const App = () => {
	return <RouterProvider router={appRouter}>App</RouterProvider>;
};

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// myapp.com
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{ path: "/profile", element: <Profile /> },
]);
const App = () => {
	return <RouterProvider router={appRouter}>App</RouterProvider>;
};

export default App;

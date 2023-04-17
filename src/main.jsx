import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import SignIn from "./views/authentication/signin";
import "./assets/css/main.css";
import SignUp from "./views/authentication/signup";

const router = createBrowserRouter([
	{
		path: "/iniciar-sesion",
		element: <SignIn />,
	},
	{
		path: "/registrarse",
		element: <SignUp />,
	}
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

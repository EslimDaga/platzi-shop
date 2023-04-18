import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import SignIn from "./views/authentication/signin";
import SignUp from "./views/authentication/signup";
import store from "./app/store";
import "./assets/css/main.css";

const router = createBrowserRouter([
	{
		path: "/iniciar-sesion",
		element: <SignIn />,
	},
	{
		path: "/registrarse",
		element: <SignUp />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

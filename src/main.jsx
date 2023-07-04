import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
const helmetContext = {};
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider context={helmetContext}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</HelmetProvider>
	</React.StrictMode>
);

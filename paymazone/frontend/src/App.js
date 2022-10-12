import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { LoginPage, SignupPage } from "./components/SessionFormPage"
import Navigation from "./components/Navigation"

const App = () => {
	return (
		<div className="app-container">
			{/* <h1>Hello from App</h1> */}
			<Navigation />
			
			<Switch>
				<Route path="/login">
					<LoginPage />
				</Route>

				<Route path="/signup">
					<SignupPage />
				</Route>

			</Switch>
		</div>
	);
}
	
export default App;

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage"

function App() {
	return (
		<div className="app" >
			<h1>Hello from App</h1>
			{/* <Switch>
				<Route path="/login">
					<LoginFormPage />
				</Route>

			</Switch> */}
		</div>
	);
}
	
	export default App;

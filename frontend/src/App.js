import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { LoginPage, SessionPageFooter, SignupPage } from "./components/SessionFormPage";
import Navigation from "./components/Navigation";
import CategoryNav from './components/CategoryNav';
import ProductShow from './components/ProductShow';
import ProductIndex from './components/ProductIndex';

const App = () => {
	return (
		<div className="app-container">
			{/* <h1>Hello from App</h1> */}
			<Navigation />
			<CategoryNav />
			<Switch>
				<Route path="/login">
					<LoginPage />
					<SessionPageFooter />
				</Route>

				<Route path="/signup">
					<SignupPage />
					<SessionPageFooter />
				</Route>
				<Route path="/" component={ProductIndex} />
				<Route path="/products/:productId" component={ProductShow} />

			</Switch>
		</div>
	);
}
	
export default App;

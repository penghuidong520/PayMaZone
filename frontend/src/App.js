import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import { LoginPage, SessionPageFooter, SignupPage } from "./components/SessionFormPage";
import Navigation from "./components/Navigation";
import CategoryNav from './components/CategoryNav';
import ProductShow from './components/ProductShow';
import ProductIndex from './components/ProductIndex';
import CategoryShow from './components/CategoryNav/CategoryShow';

const App = () => {

	const signup = useRouteMatch('/signup')
	const login = useRouteMatch('/login')

	return (
		<div className="app-container">
			{/* <h1>Hello from App</h1> */}
			{ !signup && !login && <Navigation />}
			{ !signup && !login && <CategoryNav />}
			<Switch>
				<Route exact path="/login">
					<LoginPage />
					<SessionPageFooter />
				</Route>

				<Route exact path="/signup">
					<SignupPage />
					<SessionPageFooter />
				</Route>
				<Route exact path="/" />
				<Route exact path="/products" component={ProductIndex} />
				<Route exact path="/products/:productId" component={ProductShow} />
				<Route exact path="/category/:categoryId" component={CategoryShow} ></Route>

			</Switch>
		</div>
	);
}
	
export default App;

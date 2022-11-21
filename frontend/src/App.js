import React, { useEffect } from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import { LoginPage, SessionPageFooter, SignupPage } from "./components/SessionFormPage";
import Navigation from "./components/Navigation";
import CategoryNav from './components/CategoryNav';
import ProductShow from './components/ProductShow';
import ProductIndex from './components/ProductIndex';
import CategoryShow from './components/CategoryNav/CategoryShow';
import CartIndex from './components/CartIndex';
import HomePage from './components/HomePage';
import ReviewForm from './components/ReviewForm';
import { useDispatch, useSelector } from 'react-redux';
import SearchResult from './components/Search';

import { fetchCarts } from './store/cart';

const App = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(({session: user}) => user);
	const signup = useRouteMatch('/signup')
	const login = useRouteMatch('/login')
	// debugger;
	useEffect(() => {
		// debugger;
		if (currentUser.user) dispatch(fetchCarts());
	}, [dispatch, currentUser]);

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
				<Route exact path="/" component={HomePage} />
				<Route exact path="/products" component={ProductIndex} />
				<Route exact path="/products/:productId" component={ProductShow} />

				<Route exact path="/category/:categoryId" component={CategoryShow} ></Route>

				<Route exact path="/carts" component={CartIndex} />
				<Route exact path="/products/:productId/review" component={ReviewForm} />
				<Route exact path="/products/:productId/review/:reviewId" component={ReviewForm} />
				<Route exact path="/search/:searchTerm" component={SearchResult} />
			</Switch>
		</div>
	);
}
	
export default App;

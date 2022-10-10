import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);

const store = configureStore();

// test
if (process.env.NODE_ENV !== "production") {
	window.store = store;
	window.csrfFetch = csrfFetch;
	window.sessionActions = sessionActions;
}
//

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

const renderApplication = () => {
	root.render(
		<React.StrictMode>
			<Root />
		</React.StrictMode>
	);
}

if (
sessionStorage.getItem("currentUser") === null ||
sessionStorage.getItem("X-CSRF-Token") === null 
) {
	store.dispatch(sessionActions.restoreSession()).then(renderApplication());
} else {
	renderApplication();
}
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import csrfFetch, {restoreCSRF} from './store/csrf';
import * as sessionActions from './store/session';


document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore();

// test
window.store = store;
if (process.env.NODE_ENV !== "production") {
	window.csrfFetch = csrfFetch;
	// window.sessionActions = sessionActions;
}
//

function Root() {
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
}

const renderApplication = () => {
	root.render(
		<React.StrictMode>
			<Root />
		</React.StrictMode>,
		);
}
	
if (sessionStorage.getItem("X-CSRF-Token") === null) {
	restoreCSRF().then(renderApplication);
} else {
	renderApplication();
}
	
	// if (
	// sessionStorage.getItem("currentUser") === null ||
	// sessionStorage.getItem("X-CSRF-Token") === null 
	// ) {
	// 	store.dispatch(sessionActions.restoreSession()).then(renderApplication);
	// } else {
	// 	renderApplication();
	// }
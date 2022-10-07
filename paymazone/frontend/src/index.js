import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import * as sessionActions from './store/session'


document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore();

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
	
	
	
	if (
		sessionStorage.getItem("currentUser") === null ||
		sessionStorage.getItem("X-CSRF-Token") === null 
		) {
			store.dispatch(sessionActions.restoreSession()).then(renderApplication);
		} else {
			renderApplication();
		}
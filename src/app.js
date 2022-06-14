// Have third party's at the top
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';

import configureStore from './store/configureStore';

// import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css'; // Normalizes all styles starting points on all browsers.
import './styles/styles.scss'; // SASS styles form
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import Dashboard from './components/Dashboard';
import { startSetInventory } from './actions/inventory';
import { startSetWarehouses } from './actions/warehouses';
import { getDatabase } from './actions/databaseFunctions';

const store = configureStore();

/**
 * Provider provides the store to all of our Components to connect
 * through importing connect from react-redux.
 * It requires one argument, which is the store.
 * 
 * This makes the easy to share the State with all the Components
 * rather than passing it down from one Component to the next
 */
 const jsx = (
	<React.StrictMode>
		<Provider store={store}>
		<Dashboard />
	</Provider>
	</React.StrictMode>
);

// Render Loading Message
ReactDOM.render(jsx, document.getElementById('app'));

// TODO: dispatches
store.dispatch(startSetWarehouses(getDatabase().warehouses));
store.dispatch(startSetInventory(getDatabase().inventory));
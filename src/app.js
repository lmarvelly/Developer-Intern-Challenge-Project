// Have third party's at the top
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';



// import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css'; // Normalizes all styles starting points on all browsers.
import './styles/styles.scss'; // SASS styles form
import 'react-dates/lib/css/_datepicker.css';
// import { firebase } from './firebase/firebase';
import Dashboard from './components/Dashboard';

// Render Loading Message
ReactDOM.render(<Dashboard />, document.getElementById('app'));

// Firebase authentication
// firebase.auth().onAuthStateChanged((user) =>
// {
// 	if(user)
// 	{
// 		store.dispatch(login(user.uid));
// 		// App renders after Promises are complete
// 		store.dispatch(startSetMembers());
// 		store.dispatch(startSetSeasons());
// 		store.dispatch(startSetRecords())
// 			.then(() =>
// 			{
// 				store.dispatch( sortAlphabetAsc() ); // Should sort Member alphabetically
// 				renderApp();
// 				if(history.location.pathname === '/')
// 				{
// 					history.push('/dashboard');
// 				};
// 			});
// 	}
// 	else
// 	{
// 		store.dispatch(logout())
// 		renderApp();
// 		history.push('/');
// 	}
// });
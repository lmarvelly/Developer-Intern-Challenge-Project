import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Dashboard from '../components/Dashboard';

// Export History to be used in other files
export const history = createHistory();

/**
 * @class We're using <Router> rather than <BrowserRouter> to get 
 * the App history rather than the Browsers
 * 
 * @class <Route> needs a path to link to and a component to render
 * ':id' creates a dynamic way of getting the Sub using the ID. 
 * Setting exact equal to true means that we only get the Dashboard
 * when the route path is typed in.
 * 
 * @class <Switch> goes through the Routes one by one to find a
 * match, from top to bottom. It stops when it finds a match. 
 * NotFoundPage will show for any address that are not found.
 */
const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path='/' component={Dashboard} exact={true} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
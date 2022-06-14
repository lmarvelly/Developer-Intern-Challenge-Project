import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import inventoryRecordReducer from '../reducers/inventory';
import warehousesRecordReducer from '../reducers/warehouse';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * STORE CREATION
 * 
 * Calls the reducers with no state and no action, so the default 
 * state is invoked instead.
 * @param {array} paymentRecord is the array of records, it's an empty array by 
 * default.
 * @param {object} recordFilterReducer this is the object of filters
 */
export default () => {
	const store = createStore(
		combineReducers(
		{
			inventory: inventoryRecordReducer,
			warehouses: warehousesRecordReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};
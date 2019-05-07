import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import reducers from './reducers';
import Venues from './containers/Venues/Venues';
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxLogger));

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<Venues />
			</div>
		</Provider>
	);
};

export default App;

import { combineReducers } from 'redux';
import VenuesReducer from '../containers/Venues/VenuesReducer';

export default combineReducers({
	venues: VenuesReducer
});

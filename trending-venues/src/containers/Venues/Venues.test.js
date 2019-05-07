import reducer from './VenuesReducer';
import * as types from './actionTypes';

// The reducer should always return a copy of the initial state
describe('venues reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			venues: [],
			isfetching: false,
			error: false
		});
	});
});

import { VENUES_FETCH_START, VENUES_FETCH_SUCCESS, VENUES_FETCH_FAILED } from './actionTypes';

const INITIAL_STATE = {
	venues: [],
	isfetching: false,
	error: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case VENUES_FETCH_START:
			return {
				...state,
				isfetching: true
			};
		case VENUES_FETCH_SUCCESS:
			return {
				...state,
				isfetching: false,
				venues: action.payload
			};

		case VENUES_FETCH_FAILED:
			return {
				...state,
				isfetching: false,
				error: true
			};
		default:
			return state;
	}
};

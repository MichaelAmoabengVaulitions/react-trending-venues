import axios from 'axios';
import { VENUES_FETCH_START, VENUES_FETCH_SUCCESS, VENUES_FETCH_FAILED } from './actionTypes';

// These credentials should be stored in a secured file in a production app
const CIENT_ID = 'UZNZHK1RU5JDH14FRNWZ5YSIIFEECMGJH0YYHMRCOQMV4GS1';
const CLIENT_SECRET = 'KHBO1UI5UUJKO30CWQ0U53V23A11FUY15NO2JTNJBRAF4PFY';
const endPoint = 'https://api.foursquare.com/v2/venues/search?';

function venuesFetchStart() {
	return {
		type: VENUES_FETCH_START
	};
}

function venuesFetchSuccess(venues) {
	return {
		type: VENUES_FETCH_SUCCESS,
		payload: venues
	};
}

function venuesFetchFailed(error) {
	return {
		type: VENUES_FETCH_FAILED,
		error
	};
}

export const getVenues = () => {
	return (dispatch) => {
		const parameters = {
			client_id: CIENT_ID,
			client_secret: CLIENT_SECRET,
			near: 'Berlin',
			limit: 10,
			v: 20190509
		};
		dispatch(venuesFetchStart());
		axios
			.get(endPoint + new URLSearchParams(parameters))
			.then((response) => {
				dispatch(venuesFetchSuccess(response.data.response.venues));
			})
			.catch((errors) => {
				if (errors) {
					console.log(errors);
				}
			});
	};
};

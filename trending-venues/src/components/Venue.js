import React from 'react';
import './styles.css';
const Venue = ({ venueName, venueAddress, venueCity }) => {
	return (
		<div className="u-center-text u-margin-top-huge">
			<a href="#" className="btn-text">
				{venueName}&rarr;
			</a>
		</div>
	);
};

export default Venue;

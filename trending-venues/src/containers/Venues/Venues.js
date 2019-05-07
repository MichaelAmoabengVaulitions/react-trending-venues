import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import Venue from '../../components/Venue';
import './styles.css';

class Venues extends Component {
	componentDidMount() {
		this.props.getVenues();
	}

	render() {
		const { isFetching, venues } = this.props.venues;
		return (
			<div className="section-venues">
				<div className="u-center-text u-margin-bottom-big">
					<h2 className="heading-secondary">Trending Venues</h2>
				</div>
				{isFetching ? (
					'Loading trending venues.......'
				) : (
					venues.map((venue) => {
						return (
							<div key={venue.id}>
								<Venue
									venueName={venue.name}
									venueAddress={venue.location.address}
									venueCity={venue.location.city}
								/>
							</div>
						);
					})
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		venues: state.venues
	};
};

export default connect(mapStateToProps, actions)(Venues);

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Venue from './Venue';

configure({ adapter: new Adapter() });

describe('<Venue />', () => {
	it('should render one venueName', () => {
		const wrapper = shallow(<Venue />);
		expect(wrapper.find(<a />));
	});
});

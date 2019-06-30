import React from 'react';
import PropTypes from 'prop-types';

const Navitaion = props => {
	return (
		<ul className={'pagination d-flex justify-content-center'}>
			<li className={'page-item'}>
				<button className={'page-link'} onClick={props.getPrev}>
					Previous
				</button>
			</li>
			<li className={'page-item'}>
				<button className={'page-link'} onClick={props.getNext}>
					Next
				</button>
			</li>
		</ul>
	)
};

Navitaion.propTypes = {
	getPrev: PropTypes.func,
	getNext: PropTypes.func
}

export default Navitaion;
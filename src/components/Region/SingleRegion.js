import React from 'react';
import PropTypes from 'prop-types';

import './regions.scss';

const SingleRegion = (props) => {
	return(
		<div className="single-region col-md-3">
			<div className="col-md-8 offset-md-2 wrap-region">
				<p className="text-center"><strong>{props.name}</strong></p>
			</div>
		</div>
	);
};

SingleRegion.propTypes = {
	name: PropTypes.string.isRequired
};

export default SingleRegion;
import React from 'react';
import PropTypes from 'prop-types';

const PostItem = props => (
	<div className={'media mb-3 border align-items-stretch'}>
		{
			props.thumbnail !== 'self' && 
				<img className={'align-self-start'} src={props.thumbnail} />
		}
		<div className={'media-body pt-3 pr-3 pl-3'}>
			<div className={'d-flex flex-column h-100'}>
				<h5 className={'mt-0'}>{props.title}</h5>
				<div className={'mt-auto d-flex justify-content-between'}>
					<p>{props.author}, {props.time}</p>
					<a href={props.postLink}>read more</a>
				</div>
			</div>
		</div>
	</div>
);

PostItem.propTypes = {
	title: PropTypes.string,
	postLink: PropTypes.string,
	thumbnail: PropTypes.string,
	author: PropTypes.string,
	time: PropTypes.string,
};

export default PostItem;